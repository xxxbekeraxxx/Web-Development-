import { AsyncPipe, CurrencyPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs';
import { Category, Product } from '../../core/models/shop.models';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, NgIf, CurrencyPipe, DatePipe, ReactiveFormsModule, RouterLink, AsyncPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  categories: Category[] = [];
  products: Product[] = [];
  count = 0;
  page = 1;
  readonly search = new FormControl('');
  readonly category = new FormControl('');
  readonly sort = new FormControl('newest');

  constructor(private readonly api: ApiService) {}

  ngOnInit(): void {
    this.api.getCategories().subscribe((res) => (this.categories = res));

    this.search.valueChanges.pipe(startWith(''), debounceTime(300), distinctUntilChanged()).subscribe(() => {
      this.page = 1;
      this.load();
    });

    this.category.valueChanges.subscribe(() => {
      this.page = 1;
      this.load();
    });

    this.sort.valueChanges.subscribe(() => {
      this.page = 1;
      this.load();
    });

    this.load();
  }

  load(): void {
    this.api
      .getProducts({
        page: this.page,
        category: this.category.value || undefined,
        search: this.search.value || undefined,
        sort: this.sort.value || undefined
      })
      .subscribe((res) => {
        this.products = res.results;
        this.count = res.count;
      });
  }

  nextPage(): void {
    if (this.page * 10 < this.count) {
      this.page += 1;
      this.load();
    }
  }

  prevPage(): void {
    if (this.page > 1) {
      this.page -= 1;
      this.load();
    }
  }

  getProductImage(product: Product): string {
    if (product.image_url) {
      return product.image_url;
    }
    return this.getFallbackBySlug(product.category.slug);
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
