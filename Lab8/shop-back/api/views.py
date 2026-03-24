from django.db.models import Count
from django.shortcuts import get_object_or_404
from drf_spectacular.utils import OpenApiParameter, extend_schema
from rest_framework import filters, generics, status
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Category, Product
from .serializers import (
    CategorySerializer,
    CreateOrderSerializer,
    OrderSerializer,
    ProductSerializer,
)


class TenItemsPagination(PageNumberPagination):
    page_size = 10


class ProductListAPIView(generics.ListAPIView):
    serializer_class = ProductSerializer
    pagination_class = TenItemsPagination
    filter_backends = [filters.SearchFilter]
    search_fields = ["name", "description", "category__name"]

    @extend_schema(
        parameters=[
            OpenApiParameter(
                name="category",
                description="Filter by category slug",
                required=False,
                type=str,
            )
        ]
    )
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

    def get_queryset(self):
        queryset = (
            Product.objects.filter(is_active=True)
            .select_related("category")
            .order_by("-created_at")
        )
        category_slug = self.request.query_params.get("category")
        if category_slug:
            queryset = queryset.filter(category__slug=category_slug)

        sort = self.request.query_params.get("sort")
        if sort == "price_asc":
            queryset = queryset.order_by("price")
        elif sort == "price_desc":
            queryset = queryset.order_by("-price")
        elif sort == "newest":
            queryset = queryset.order_by("-created_at")

        return queryset


class ProductDetailAPIView(generics.RetrieveAPIView):
    serializer_class = ProductSerializer
    lookup_field = "id"

    def get_queryset(self):
        return Product.objects.filter(is_active=True).select_related("category")


class CategoryListAPIView(generics.ListAPIView):
    serializer_class = CategorySerializer

    def get_queryset(self):
        return Category.objects.annotate(product_count=Count("products")).order_by("name")


class CategoryDetailAPIView(generics.RetrieveAPIView):
    serializer_class = CategorySerializer
    lookup_field = "id"

    def get_queryset(self):
        return Category.objects.annotate(product_count=Count("products"))


class CategoryProductsAPIView(generics.ListAPIView):
    serializer_class = ProductSerializer
    pagination_class = TenItemsPagination

    def get_queryset(self):
        category_id = self.kwargs["id"]
        get_object_or_404(Category, pk=category_id)
        return (
            Product.objects.filter(category_id=category_id, is_active=True)
            .select_related("category")
            .order_by("-created_at")
        )


class OrderCreateAPIView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = CreateOrderSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        order = serializer.save()
        return Response(OrderSerializer(order).data, status=status.HTTP_201_CREATED)
from django.shortcuts import render

# Create your views here.
