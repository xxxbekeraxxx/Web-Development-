import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { CartService } from '../core/services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, AsyncPipe, CurrencyPipe],
  template: `
    <header class="header">
      <a class="brand" routerLink="/">Online Shop</a>
      <nav>
        <a routerLink="/">Products</a>
        <a routerLink="/cart">Cart ({{ itemCount$ | async }})</a>
      </nav>
    </header>
  `,
  styles: [
    '.header { display:flex; justify-content:space-between; align-items:center; padding:1rem; background:#111827; color:white; }',
    'a { color:white; margin-left:1rem; text-decoration:none; }',
    '.brand { font-weight:700; margin-left:0; }'
  ]
})
export class HeaderComponent {
  readonly itemCount$ = this.cartService.items$.pipe(
    map((items) => items.reduce((sum, item) => sum + item.quantity, 0))
  );

  constructor(private readonly cartService: CartService) {}
}
