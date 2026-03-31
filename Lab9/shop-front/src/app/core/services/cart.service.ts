import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem, Product } from '../models/shop.models';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly storageKey = 'online-shop-cart';
  private readonly itemsSubject = new BehaviorSubject<CartItem[]>(this.readStorage());
  readonly items$ = this.itemsSubject.asObservable();

  get items(): CartItem[] {
    return this.itemsSubject.value;
  }

  add(product: Product, quantity = 1): void {
    const items = [...this.items];
    const existing = items.find((item) => item.product.id === product.id);

    if (existing) {
      existing.quantity += quantity;
    } else {
      items.push({ product, quantity });
    }

    this.update(items);
  }

  setQuantity(productId: number, quantity: number): void {
    const items = this.items
      .map((item) =>
        item.product.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
      .filter((item) => item.quantity > 0);
    this.update(items);
  }

  remove(productId: number): void {
    this.update(this.items.filter((item) => item.product.id !== productId));
  }

  clear(): void {
    this.update([]);
  }

  subtotal(): number {
    return this.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

  tax(): number {
    return this.subtotal() * 0.1;
  }

  shipping(): number {
    return this.subtotal() >= 100 ? 0 : 7.99;
  }

  total(): number {
    return this.subtotal() + this.tax() + this.shipping();
  }

  private update(items: CartItem[]): void {
    this.itemsSubject.next(items);
    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }

  private readStorage(): CartItem[] {
    try {
      return JSON.parse(localStorage.getItem(this.storageKey) || '[]') as CartItem[];
    } catch {
      return [];
    }
  }
}
