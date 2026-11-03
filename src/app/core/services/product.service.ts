import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Smartphone X',
      description: 'Latest smartphone with advanced features',
      price: 699.99,
      category: 'Electronics',
      brand: 'Brand X',
      image: 'assets/images/smartphone.jpg',
      inStock: true,
      slug: 'smartphone-x'
    },
    {
      id: 2,
      name: 'Laptop Pro',
      description: 'High-performance laptop for professionals',
      price: 1299.99,
      category: 'Electronics',
      brand: 'Brand X',
      image: 'assets/images/laptop.jpg',
      inStock: true,
      slug: 'laptop-pro'
    },
    {
      id: 3,
      name: 'Coffee Maker',
      description: 'Automatic coffee maker with timer',
      price: 89.99,
      category: 'Home Appliances',
      brand: 'Brand Y',
      image: 'assets/images/coffee-maker.jpg',
      inStock: false,
      slug: 'coffee-maker'
    }
  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = this.products.find(p => p.id === id);
    return of(product);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    const filteredProducts = this.products.filter(p => p.category === category);
    return of(filteredProducts);
  }
}