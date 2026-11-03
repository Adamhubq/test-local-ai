import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { CategoryService } from '../../core/services/category.service';
import { Category } from '../../core/models/category.model';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { SearchComponent } from '../../shared/components/search/search.component';
import { CommonModule } from '@angular/common';
import { SidebarNavigationComponent } from '../../shared/components/sidebar-navigation/sidebar-navigation.component';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  imports: [ProductCardComponent, SearchComponent, SidebarNavigationComponent, CommonModule]
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: Category[] = [];

  constructor(private productService: ProductService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.filteredProducts = products;
    });
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  onSearch(searchTerm: string): void {
    if (!searchTerm.trim()) {
      this.filteredProducts = this.products;
      return;
    }
    
    this.filteredProducts = this.products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}