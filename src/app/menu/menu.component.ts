import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../core/services/category.service';
import { Category } from '../core/models/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  categories: Category[] = [];
  isCategoriesOpen = false;

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  onMenuClick(event: Event, menuItem: string) {
    event.preventDefault();
    
    if (menuItem === 'Categories') {
      this.isCategoriesOpen = !this.isCategoriesOpen;
      if (!this.categories.length) {
        this.loadCategories();
      }
    } else {
      // Handle other menu items
      console.log('Menu item clicked:', menuItem);
    }
  }

  onCategoryClick(category: Category) {
    // Navigate to catalog page with category filter
    this.router.navigate(['/category', category.name.toLowerCase()]);
  }

  private loadCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
      },
      error: (error) => {
        console.error('Error loading categories:', error);
      }
    });
  }
}
