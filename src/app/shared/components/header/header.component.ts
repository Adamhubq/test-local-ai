import { Component, OnInit, OnDestroy, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';
import { Cart } from '../../../core/models/cart.model';
import { NavigationService } from '../../../core/services/navigation.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [MenuComponent]
})
export class HeaderComponent implements OnInit, OnDestroy {
  cart: Cart = { items: [], totalItems: 0, totalPrice: 0 };
  activeIndex = 0;

  constructor(
    private navigationService: NavigationService,
    private cartService: CartService,
    private router: Router,
    private elementRef: ElementRef
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

  @HostListener('keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft') {
      this.activeIndex = Math.max(0, this.activeIndex - 1);
    } else if (event.key === 'ArrowRight') {
      this.activeIndex = Math.min(7, this.activeIndex + 1); // 8 menu items
    } else if (event.key === 'Enter' || event.key === ' ') {
      // Navigate to the active item when Enter or Space is pressed
      const menuItems = [
        { path: '/catalog', label: 'Каталог' },
        { path: '/brands', label: 'Бренды' },
        { path: '/categories', label: 'Категории' },
        { path: '/cart', label: 'Корзина' },
        { path: '/account', label: 'Аккаунт' },
        { path: '/search', label: 'Поиск' },
        { path: '/about', label: 'О нас' },
        { path: '/contacts', label: 'Контакты' }
      ];
      const activeItem = menuItems[this.activeIndex];
      if (activeItem) {
        this.router.navigate([activeItem.path]);
      }
    }
  }

  setActiveItem(index: number): void {
    this.activeIndex = index;
  }

  getCursorLeft(): number {
    // This is a simplified calculation - in a real implementation,
    // we would need to measure actual element widths
    return this.activeIndex * 120; // Assuming each menu item is about 120px wide
  }
  
  onMenuItemClick(index: number): void {
    this.setActiveItem(index);
    const menuItems = [
      { path: '/catalog', label: 'Каталог' },
      { path: '/brands', label: 'Бренды' },
      { path: '/categories', label: 'Категории' },
      { path: '/cart', label: 'Корзина' },
      { path: '/account', label: 'Аккаунт' },
      { path: '/search', label: 'Поиск' },
      { path: '/about', label: 'О нас' },
      { path: '/contacts', label: 'Контакты' }
    ];
    const item = menuItems[index];
    if (item) {
      this.router.navigate([item.path]);
    }
  }
}