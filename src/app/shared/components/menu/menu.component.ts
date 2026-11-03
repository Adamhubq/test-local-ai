import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [CommonModule]
})
export class MenuComponent {
  menuItems = [
    { path: '/catalog', label: 'Каталог' },
    { path: '/brands', label: 'Бренды' },
    { path: '/categories', label: 'Категории' },
    { path: '/cart', label: 'Корзина' },
    { path: '/account', label: 'Аккаунт' },
    { path: '/search', label: 'Поиск' },
    { path: '/about', label: 'О нас' },
    { path: '/contacts', label: 'Контакты' }
  ];

  constructor(private router: Router) {}

  onMenuItemClick(index: number): void {
    const item = this.menuItems[index];
    if (item) {
      this.router.navigate([item.path]);
    }
  }
}