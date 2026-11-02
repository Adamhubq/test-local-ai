import { Category } from './category.model';
import { Brand } from './brand.model';
import { ProductImage } from './product-image.model';
import { ProductVariant } from './product-variant.model';
import { Review } from './review.model';
import { ProductStatus } from './enums';

/**
 * Модель продукта
 */
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  category: Category;
  brand: Brand;
  images: ProductImage[];
  variants: ProductVariant[];
  reviews: Review[];
  status: ProductStatus;
  createdAt: Date;
  updatedAt: Date;
  tags?: string[];
  sku?: string;
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  inStock: boolean;
  rating?: number;
  reviewCount?: number;
}