/**
 * Модель изображения продукта
 */
export interface ProductImage {
  id: string;
  productId: string;
  url: string;
  alt?: string;
  title?: string;
  isPrimary: boolean;
  sortOrder: number;
  createdAt: Date;
}