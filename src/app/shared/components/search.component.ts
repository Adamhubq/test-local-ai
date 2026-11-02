import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();
  
  @ViewChild('searchInput', { static: true }) searchInput!: ElementRef;

  onSearch(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.search.emit(target.value);
  }

  clearSearch(): void {
    this.searchInput.nativeElement.value = '';
    this.search.emit('');
  }
}