/**
 * Модель категории
 */
export interface Category {
  id: string;
  name: string;
  description?: string;
  slug: string;
  parentId?: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  image?: string;
  sortOrder: number;
}