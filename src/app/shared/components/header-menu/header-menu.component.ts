import { Component } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [],
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent {
  onMenuClick(event: Event) {
    event.preventDefault();
    // Basic click handling for menu items
    console.log('Menu item clicked');
  }
}