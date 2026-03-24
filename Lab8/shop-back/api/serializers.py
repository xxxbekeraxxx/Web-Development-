from decimal import Decimal

from django.db import transaction
from rest_framework import serializers

from .models import Category, Order, OrderItem, Product


class CategorySerializer(serializers.ModelSerializer):
    product_count = serializers.IntegerField(read_only=True)

    class Meta:
        model = Category
        fields = ("id", "name", "slug", "created_at", "product_count")


class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)

    class Meta:
        model = Product
        fields = (
            "id",
            "name",
            "price",
            "description",
            "count",
            "is_active",
            "category",
            "image_url",
            "created_at",
            "updated_at",
        )


class OrderItemInputSerializer(serializers.Serializer):
    product_id = serializers.IntegerField()
    quantity = serializers.IntegerField(min_value=1)


class OrderItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)

    class Meta:
        model = OrderItem
        fields = ("id", "product", "quantity", "unit_price", "line_total")


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(read_only=True, many=True)

    class Meta:
        model = Order
        fields = (
            "id",
            "customer_name",
            "customer_email",
            "customer_address",
            "subtotal",
            "tax",
            "shipping",
            "total",
            "items",
            "created_at",
        )


class CreateOrderSerializer(serializers.Serializer):
    customer_name = serializers.CharField(max_length=120)
    customer_email = serializers.EmailField()
    customer_address = serializers.CharField()
    items = OrderItemInputSerializer(many=True)

    def validate_items(self, value):
        if not value:
            raise serializers.ValidationError("Order must include at least one item.")
        return value

    @transaction.atomic
    def create(self, validated_data):
        items_data = validated_data.pop("items")
        product_ids = [item["product_id"] for item in items_data]
        products = Product.objects.filter(id__in=product_ids, is_active=True)
        products_map = {product.id: product for product in products}

        subtotal = Decimal("0.00")
        order_items = []

        for item in items_data:
            product = products_map.get(item["product_id"])
            if not product:
                raise serializers.ValidationError(
                    {"items": f"Product with id={item['product_id']} is unavailable."}
                )
            if product.count < item["quantity"]:
                raise serializers.ValidationError(
                    {"items": f"Insufficient stock for {product.name}."}
                )

            line_total = product.price * item["quantity"]
            subtotal += line_total
            order_items.append(
                {
                    "product": product,
                    "quantity": item["quantity"],
                    "unit_price": product.price,
                    "line_total": line_total,
                }
            )

        tax = (subtotal * Decimal("0.10")).quantize(Decimal("0.01"))
        shipping = Decimal("0.00") if subtotal >= Decimal("100.00") else Decimal("7.99")
        total = subtotal + tax + shipping

        order = Order.objects.create(
            **validated_data,
            subtotal=subtotal,
            tax=tax,
            shipping=shipping,
            total=total,
        )

        for order_item in order_items:
            OrderItem.objects.create(order=order, **order_item)
            product = order_item["product"]
            product.count -= order_item["quantity"]
            product.save(update_fields=["count", "updated_at"])

        return order
