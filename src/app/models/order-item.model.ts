import { ProductVariant } from './product-variant.model';

/**
 * Модель элемента заказа
 */
export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  variantId?: string;
  variant?: ProductVariant;
  quantity: number;
  price: number;
  discountPrice?: number;
  total: number; // quantity * price
  createdAt: Date;
}