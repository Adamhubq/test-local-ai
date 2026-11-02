import { Component } from '@angular/core';
import { CartItem } from '../../core/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  hasItems = false;
  cartItems: CartItem[] = [];
  
  continueShopping() {
    // Implementation
  }
  
  proceedToCheckout() {
    // Implementation
  }
}