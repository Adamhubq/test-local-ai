/**
 * Модель баннера
 */
export interface Banner {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  linkUrl?: string;
  altText?: string;
  isActive: boolean;
  startDate?: Date;
  endDate?: Date;
  sortOrder: number;
  createdAt: Date;
  updatedAt: Date;
}