import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  product = input.required<Product>();
  
  like = output<number>();
  delete = output<number>();

  onLike() {
    this.like.emit(this.product().id);
  }

  onDelete() {
    this.delete.emit(this.product().id);
  }

  shareOnWhatsApp() {
    const text = `Check out this product: ${this.product().name} - ${this.product().link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product().link)}&text=${encodeURIComponent(this.product().name)}`;
    window.open(url, '_blank');
  }
}
