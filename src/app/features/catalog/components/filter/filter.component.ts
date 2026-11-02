import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  categories: any[] = [];
  brands: any[] = [];
  minPrice = 0;
  maxPrice = 10000;
  priceRange = 10000;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    // This would normally call a service to get categories
    // For now, we'll use mock data
    this.categories = [
      { id: 1, name: 'Electronics' },
      { id: 2, name: 'Clothing' },
      { id: 3, name: 'Books' }
    ];
    
    this.brands = [
      { id: 1, name: 'Brand A' },
      { id: 2, name: 'Brand B' },
      { id: 3, name: 'Brand C' }
    ];
  }

  onCategoryChange(event: any): void {
    // Handle category change
    console.log('Category changed to:', event.target.value);
  }

  onPriceChange(): void {
    // Handle price range change
    console.log('Price range changed to:', this.priceRange);
  }

  onBrandChange(event: any): void {
    // Handle brand change
    console.log('Brand changed to:', event.target.value);
  }

  resetFilters(): void {
    // Reset all filters
    this.priceRange = 10000;
    console.log('Filters reset');
  }
}