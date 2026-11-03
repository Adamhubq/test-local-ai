import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../models/category.model';
import { CATEGORIES } from '../../../assets/mock/categories.mock';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories: Category[] = CATEGORIES;

  constructor() { }

  getCategories(): Observable<Category[]> {
    return of(this.categories);
  }

  getCategoryById(id: number): Observable<Category | undefined> {
    const category = this.categories.find(c => c.id === id);
    return of(category);
  }
}