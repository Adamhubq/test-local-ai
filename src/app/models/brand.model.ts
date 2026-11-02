/**
 * Модель бренда
 */
export interface Brand {
  id: string;
  name: string;
  description?: string;
  slug: string;
  logo?: string;
  website?: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  country?: string;
}