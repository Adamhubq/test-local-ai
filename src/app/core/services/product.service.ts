import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';
import { MOCK_PRODUCTS } from '../../data/mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private mockProducts: Product[] = MOCK_PRODUCTS;

  getProducts(): Observable<Product[]> {
    return of(this.mockProducts);
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = this.mockProducts.find(p => p.id === id);
    return of(product);
  }

  addProduct(product: Omit<Product, 'id'>): Observable<Product> {
    const newProduct: Product = {
      ...product,
      id: this.generateId()
    };
    this.mockProducts.push(newProduct);
    return of(newProduct);
  }

  private generateId(): number {
    return this.mockProducts.length > 0 
      ? Math.max(...this.mockProducts.map(p => p.id)) + 1 
      : 1;
  }
}