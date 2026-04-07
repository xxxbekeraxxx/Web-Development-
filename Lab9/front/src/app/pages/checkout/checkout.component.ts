import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../core/services/api.service';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule, CurrencyPipe, NgFor, NgIf],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  readonly items = this.cart.items;
  submitting = false;
  successMessage = '';

  readonly form = this.fb.group({
    customer_name: ['', [Validators.required]],
    customer_email: ['', [Validators.required, Validators.email]],
    customer_address: ['', [Validators.required]]
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly cart: CartService,
    private readonly api: ApiService,
    private readonly router: Router
  ) {}

  placeOrder(): void {
    if (this.form.invalid || !this.items.length) return;
    this.submitting = true;

    this.api
      .createOrder({
        customer_name: this.form.value.customer_name || '',
        customer_email: this.form.value.customer_email || '',
        customer_address: this.form.value.customer_address || '',
        items: this.items.map((item) => ({ product_id: item.product.id, quantity: item.quantity }))
      })
      .subscribe({
        next: () => {
          this.successMessage = 'Order placed successfully.';
          this.cart.clear();
          this.submitting = false;
          setTimeout(() => this.router.navigateByUrl('/'), 1200);
        },
        error: () => {
          this.submitting = false;
          this.successMessage = 'Failed to place order. Please try again.';
        }
      });
  }

  protected readonly cartService = this.cart;
}
