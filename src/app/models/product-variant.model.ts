import { ProductColor } from './product-color.model';
import { ProductSize } from './product-size.model';

/**
 * Модель варианта продукта (размер, цвет и т.д.)
 */
export interface ProductVariant {
  id: string;
  productId: string;
  sku: string;
  price: number;
  discountPrice?: number;
  stockQuantity: number;
  color?: ProductColor;
  size?: ProductSize;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}