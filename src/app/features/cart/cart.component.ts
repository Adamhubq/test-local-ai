import { Component, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { Cart } from '../../core/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Cart | null = null;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCart().subscribe(cart => {
      this.cart = cart;
    });
  }

  removeFromCart(productId: number): void {
    if (this.cart && this.cart.items) {
      this.cartService.removeFromCart(productId);
    }
  }

  clearCart(): void {
    if (this.cart && this.cart.items) {
      this.cartService.clearCart();
    }
  }
}