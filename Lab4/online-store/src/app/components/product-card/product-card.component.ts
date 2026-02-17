import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;

  get stars(): number[] {
    return Array(Math.floor(this.product.rating)).fill(0);
  }

  get hasHalfStar(): boolean {
    return this.product.rating % 1 >= 0.5;
  }

  get emptyStars(): number[] {
    return Array(5 - Math.ceil(this.product.rating)).fill(0);
  }

  shareOnWhatsApp(): void {
    const text = `Check out this product: ${this.product.name} - ${this.product.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram(): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }
}
