import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CartService } from '../../../core/cart/cart.service';

@Component({
  selector: 'cart-page',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css',
})
export class CartPage {
  cart = inject(CartService);

  onQty(e: Event, id: number) {
    const value = +(e.target as HTMLInputElement).value;
    if (Number.isFinite(value)) this.cart.setQty(id, value);
  }
}
