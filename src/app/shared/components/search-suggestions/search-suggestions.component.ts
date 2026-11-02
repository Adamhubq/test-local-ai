import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchService, SearchSuggestion } from '../../../core/services/search.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-search-suggestions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-suggestions.component.html',
  styleUrls: ['./search-suggestions.component.scss']
})
export class SearchSuggestionsComponent implements OnInit, OnDestroy {
  @Input() isVisible: boolean = false;
  
  suggestions$: Observable<SearchSuggestion[]>;
  subscription: Subscription | null = null;

  constructor(private searchService: SearchService) {
    this.suggestions$ = this.searchService.suggestions$;
  }

  ngOnInit(): void {
    this.subscription = this.searchService.getSuggestions().subscribe();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  selectSuggestion(suggestion: SearchSuggestion): void {
    // This would typically trigger a search with the selected suggestion
    console.log('Selected suggestion:', suggestion);
  }
}