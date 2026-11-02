import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, debounceTime, distinctUntilChanged, map } from 'rxjs';

export interface SearchSuggestion {
  id: string;
  title: string;
  type: 'product' | 'category' | 'brand';
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchQuerySubject = new BehaviorSubject<string>('');
  public searchQuery$ = this.searchQuerySubject.asObservable();

  private suggestionsSubject = new BehaviorSubject<SearchSuggestion[]>([]);
  public suggestions$ = this.suggestionsSubject.asObservable();

  // Mock data for suggestions
  private mockSuggestions: SearchSuggestion[] = [
    { id: '1', title: 'iPhone 14', type: 'product' },
    { id: '2', title: 'Samsung Galaxy S23', type: 'product' },
    { id: '3', title: 'Laptop', type: 'category' },
    { id: '4', title: 'Apple', type: 'brand' },
    { id: '5', title: 'Samsung', type: 'brand' },
    { id: '6', title: 'Headphones', type: 'product' },
  ];

  setSearchQuery(query: string): void {
    this.searchQuerySubject.next(query);
  }

  getSuggestions(): Observable<SearchSuggestion[]> {
    return this.searchQuery$.pipe(
      debounceTime(300), // Debounce for 300ms
      distinctUntilChanged(),
      map(query => {
        if (!query.trim()) {
          return [];
        }
        // Filter mock suggestions based on query
        return this.mockSuggestions.filter(suggestion => 
          suggestion.title.toLowerCase().includes(query.toLowerCase())
        );
      })
    );
  }

  clearSuggestions(): void {
    this.suggestionsSubject.next([]);
  }
}