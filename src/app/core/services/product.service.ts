import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      slug: 'smartphone-x',
      name: 'Smartphone X',
      description: 'Latest smartphone with advanced features',
      price: 699.99,
      category: 'Electronics',
      image: 'assets/images/smartphone.jpg',
      inStock: true
    },
    {
      id: 2,
      slug: 'laptop-pro',
      name: 'Laptop Pro',
      description: 'High-performance laptop for professionals',
      price: 1299.99,
      category: 'Electronics',
      image: 'assets/images/laptop.jpg',
      inStock: true
    },
    {
      id: 3,
      slug: 'coffee-maker',
      name: 'Coffee Maker',
      description: 'Automatic coffee maker with timer',
      price: 89.99,
      category: 'Home Appliances',
      image: 'assets/images/coffee-maker.jpg',
      inStock: false
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

  getProductBySlug(slug: string): Observable<Product | undefined> {
    const product = this.products.find(p => p.slug === slug);
    return of(product);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    const filteredProducts = this.products.filter(p => p.category === category);
    return of(filteredProducts);
  }
}