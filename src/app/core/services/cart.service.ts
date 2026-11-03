import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject = new BehaviorSubject<Cart>({ items: [], totalItems: 0, totalPrice: 0 });
  public cart$ = this.cartSubject.asObservable();

  constructor() {
    // Инициализация из localStorage при запуске
    this.loadCartFromStorage();
  }

  private loadCartFromStorage(): void {
    const cartData = localStorage.getItem('novaStoreCart');
    if (cartData) {
      try {
        const cart: Cart = JSON.parse(cartData);
        this.cartSubject.next(cart);
      } catch (error) {
        console.error('Ошибка при загрузке корзины из localStorage', error);
      }
    }
  }

  private saveCartToStorage(): void {
    const cart = this.cartSubject.value;
    try {
      localStorage.setItem('novaStoreCart', JSON.stringify(cart));
    } catch (error) {
      console.error('Ошибка при сохранении корзины в localStorage', error);
    }
  }

  addToCart(product: Product): void {
    const currentCart = this.cartSubject.value;
    const existingItem = currentCart.items.find(item => item.product.id === product.id);

    if (existingItem) {
      // Увеличиваем количество
      existingItem.quantity += 1;
    } else {
      // Добавляем новый элемент
      currentCart.items.push({ product, quantity: 1 });
    }

    this.updateCartTotals(currentCart);
    this.saveCartToStorage();
    this.cartSubject.next(currentCart);
  }

  removeFromCart(productId: number): void {
    const currentCart = this.cartSubject.value;
    const itemIndex = currentCart.items.findIndex(item => item.product.id === productId);

    if (itemIndex !== -1) {
      currentCart.items.splice(itemIndex, 1);
      this.updateCartTotals(currentCart);
      this.saveCartToStorage();
      this.cartSubject.next(currentCart);
    }
  }

  updateQuantity(productId: number, quantity: number): void {
    const currentCart = this.cartSubject.value;
    const item = currentCart.items.find(item => item.product.id === productId);

    if (item && quantity > 0) {
      item.quantity = quantity;
      this.updateCartTotals(currentCart);
      this.saveCartToStorage();
      this.cartSubject.next(currentCart);
    }
  }

  clearCart(): void {
    const currentCart: Cart = { items: [], totalItems: 0, totalPrice: 0 };
    this.cartSubject.next(currentCart);
    this.saveCartToStorage();
  }

  private updateCartTotals(cart: Cart): void {
    cart.totalItems = cart.items.reduce((total, item) => total + item.quantity, 0);
    cart.totalPrice = cart.items.reduce((total, item) => 
      total + (item.product.price * item.quantity), 0);
  }

  getCart(): Observable<Cart> {
    return this.cart$;
  }

  getCartItems(): Observable<CartItem[]> {
    return this.cart$.pipe(
      map(cart => cart.items)
    );
  }

  getCartTotal(): number {
    return this.cartSubject.value.totalPrice;
  }
}