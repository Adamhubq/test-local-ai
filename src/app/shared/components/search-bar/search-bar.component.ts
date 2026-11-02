import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchService } from '../../../core/services/search.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Input() placeholder: string = 'Search products...';
  @Output() search = new EventEmitter<string>();
  
  @ViewChild('searchInput', { static: true }) searchInput!: ElementRef;

  constructor(private searchService: SearchService) {}

  onSearch(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchService.setSearchQuery(target.value);
    this.search.emit(target.value);
  }

  clearSearch(): void {
    this.searchInput.nativeElement.value = '';
    this.searchService.setSearchQuery('');
    this.search.emit('');
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.clearSearch();
    } else if (event.key === 'Enter') {
      // The search is already emitted via the input event
      // This just ensures we don't prevent default behavior for Enter
      event.preventDefault();
    }
  }
}