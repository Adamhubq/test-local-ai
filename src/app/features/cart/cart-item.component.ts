import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../../core/models/cart.model';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() item!: CartItem;
  @Output() removeItem = new EventEmitter<number>();
  @Output() updateQuantity = new EventEmitter<{productId: number, quantity: number}>();

  onQuantityChange(newQuantity: number) {
    if (newQuantity >= 1) {
      this.updateQuantity.emit({ productId: this.item.product.id, quantity: newQuantity });
    }
  }

  removeItemFromCart() {
    this.removeItem.emit(this.item.product.id);
  }
}