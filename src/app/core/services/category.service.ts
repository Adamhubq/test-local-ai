import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories: Category[] = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Home Appliances' },
    { id: 3, name: 'Clothing' },
    { id: 4, name: 'Books' }
  ];

  constructor() { }

  getCategories(): Observable<Category[]> {
    return of(this.categories);
  }

  getCategoryById(id: number): Observable<Category | undefined> {
    const category = this.categories.find(c => c.id === id);
    return of(category);
  }
}