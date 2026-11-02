import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pagination } from '../../../models/pagination.model';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() pagination!: Pagination;
  @Output() pageChanged = new EventEmitter<number>();

  /**
   * Get the range of pages to display
   */
  getPages(): (number | string)[] {
    if (!this.pagination || this.pagination.totalPages <= 1) {
      return [];
    }

    const currentPage = this.pagination.page;
    const totalPages = this.pagination.totalPages;
    const maxVisiblePages = 5;
    const pages: (number | string)[] = [];

    // Always show first page
    if (currentPage > 1) {
      pages.push(1);
    }

    // Show previous page if not on first page
    if (currentPage > 2) {
      pages.push('...');
    }

    // Show current and adjacent pages
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      if (i !== 1 && i !== totalPages) {
        pages.push(i);
      }
    }

    // Show next page if not on last page
    if (currentPage < totalPages - 1) {
      pages.push('...');
    }

    // Always show last page
    if (currentPage < totalPages) {
      pages.push(totalPages);
    }

    return pages;
  }

  /**
   * Handle page change
   */
  onPageChange(page: number): void {
    if (page >= 1 && page <= this.pagination.totalPages && page !== this.pagination.page) {
      this.pageChanged.emit(page);
    }
  }

  /**
   * Navigate to next page
   */
  onNextPage(): void {
    if (this.pagination.hasNext) {
      this.onPageChange(this.pagination.page + 1);
    }
  }

  /**
   * Navigate to previous page
   */
  onPrevPage(): void {
    if (this.pagination.hasPrev) {
      this.onPageChange(this.pagination.page - 1);
    }
  }

  /**
   * Check if a page is the current page
   */
  isCurrentPage(page: number): boolean {
    return page === this.pagination.page;
  }

  /**
   * Handle keyboard navigation
   */
  onKeydown(event: KeyboardEvent, page: number): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.onPageChange(page);
    }
  }
}
