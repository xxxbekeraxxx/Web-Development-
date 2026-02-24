import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = input.required<Product[]>();
  
  like = output<number>();
  delete = output<number>();

  onLikeProduct(productId: number) {
    this.like.emit(productId);
  }

  onDeleteProduct(productId: number) {
    this.delete.emit(productId);
  }
}
