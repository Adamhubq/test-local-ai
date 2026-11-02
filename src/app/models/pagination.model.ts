/**
 * Модель пагинации
 */
export interface Pagination {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
  itemCount: number;
}

/**
 * Ответ с пагинацией
 */
export interface PaginatedResponse<T> {
  data: T[];
  pagination: Pagination;
}