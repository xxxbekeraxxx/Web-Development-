import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../core/models/shop.models';
import { ApiService } from '../../core/services/api.service';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIf, NgFor, CurrencyPipe, RouterLink, FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product?: Product;
  related: Product[] = [];
  quantity = 1;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly api: ApiService,
    private readonly cart: CartService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.api.getProduct(id).subscribe((product) => {
      this.product = product;
      this.api.getCategoryProducts(product.category.id).subscribe((res) => {
        this.related = res.results.filter((p) => p.id !== product.id).slice(0, 4);
      });
    });
  }

  addToCart(): void {
    if (!this.product) return;
    this.cart.add(this.product, this.quantity);
  }

  getMainImage(): string {
    if (!this.product) {
      return 'assets/product-fallbacks/electronics.svg';
    }
    if (this.product.image_url) {
      return this.product.image_url;
    }
    return this.getFallbackBySlug(this.product.category.slug);
  }

  useFallbackImage(event: Event, categorySlug: string): void {
    const img = event.target as HTMLImageElement;
    img.src = this.getFallbackBySlug(categorySlug);
  }

  private getFallbackBySlug(slug: string): string {
    const allowed = ['electronics', 'fashion', 'home-kitchen', 'books', 'sports'];
    const safeSlug = allowed.includes(slug) ? slug : 'electronics';
    return `assets/product-fallbacks/${safeSlug}.svg`;
  }
}
