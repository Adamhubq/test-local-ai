import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  featuredProducts: Product[] = [];
  
  constructor() { }

  ngOnInit(): void {
    // This would typically come from a service
    // For now, using mock data but properly typed
    this.featuredProducts = [
      {
        id: 1,
        name: 'Smartphone X',
        description: 'Latest smartphone with advanced features',
        price: 699.99,
        category: 'Electronics',
        image: 'assets/images/smartphone.jpg',
        inStock: true,
        colors: [],
        sizes: [],
        images: []
      },
      {
        id: 2,
        name: 'Laptop Pro',
        description: 'High-performance laptop for professionals',
        price: 1299.99,
        category: 'Electronics',
        image: 'assets/images/laptop.jpg',
        inStock: true,
        colors: [],
        sizes: [],
        images: []
      }
    ];
  }
}