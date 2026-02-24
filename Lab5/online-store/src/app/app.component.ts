import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Category } from './models/category.model';
import { ProductService } from './services/product.service';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories: Category[] = [
    { id: 1, name: 'Смартфоны' },
    { id: 2, name: 'Ноутбуки' },
    { id: 3, name: 'Наушники' },
    { id: 4, name: 'Планшеты' }
  ];

  selectedCategoryId: number | null = null;
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
    this.filteredProducts = this.productService.getProductsByCategory(categoryId);
  }

  onLikeProduct(productId: number) {
    const product = this.filteredProducts.find(p => p.id === productId);
    if (product) {
      product.likes++;
      // Создаем новую ссылку на массив для обновления
      this.filteredProducts = [...this.filteredProducts];
    }
  }

  onDeleteProduct(productId: number) {
    this.filteredProducts = this.filteredProducts.filter(p => p.id !== productId);
  }
}
