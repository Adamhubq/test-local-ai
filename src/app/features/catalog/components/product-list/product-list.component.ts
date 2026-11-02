import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  showPagination = true;
  loading = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    // This would normally call a service to get products
    // For now, we'll use mock data
    this.products = [
      {
        id: 1,
        name: 'Product 1',
        price: 29.99,
        image: '/assets/images/product1.jpg',
        rating: 4.5
      },
      {
        id: 2,
        name: 'Product 2',
        price: 39.99,
        image: '/assets/images/product2.jpg',
        rating: 4.2
      },
      {
        id: 3,
        name: 'Product 3',
        price: 49.99,
        image: '/assets/images/product3.jpg',
        rating: 4.8
      }
    ];
  }

  onSortChange(event: any): void {
    // Handle sorting change
    console.log('Sorting by:', event.target.value);
  }

  loadMore(): void {
    this.loading = true;
    // Simulate loading more products
    setTimeout(() => {
      this.products.push({
        id: this.products.length + 1,
        name: `Product ${this.products.length + 1}`,
        price: Math.floor(Math.random() * 100) + 10,
        image: '/assets/images/product.jpg',
        rating: Math.floor(Math.random() * 5) + 1
      });
      this.loading = false;
    }, 1000);
  }
}