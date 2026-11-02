import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { Cart } from '../../core/models/cart.model';
import { NavigationService } from '../../core/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  cart: Cart = { items: [], totalItems: 0, totalPrice: 0 };

  constructor(
    private navigationService: NavigationService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartService.getCart().subscribe(cart => {
      this.cart = cart;
    });
  }

  ngOnDestroy(): void {}

  goToCart(): void {
    this.navigationService.goToCart().subscribe();
  }

  search(query: string): void {
    // Логика поиска
    console.log('Search query:', query);
  }
}