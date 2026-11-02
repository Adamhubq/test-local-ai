import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-navigation',
  templateUrl: './sidebar-navigation.component.html',
  styleUrls: ['./sidebar-navigation.component.scss']
})
export class SidebarNavigationComponent {
  navigationItems = [
    { label: 'Home', route: '/' },
    { label: 'Products', route: '/products' },
    { label: 'Categories', route: '/categories' },
    { label: 'About', route: '/about' },
    { label: 'Contact', route: '/contact' }
  ];
}