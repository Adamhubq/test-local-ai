import { User } from './user.model';
import { OrderStatus } from './enums';
import { OrderItem } from './order-item.model';
import { Address } from './address.model';

/**
 * Модель заказа
 */
export interface Order {
  id: string;
  userId: string;
  user: User;
  items: OrderItem[];
  status: OrderStatus;
  shippingAddress: Address;
  billingAddress: Address;
  orderDate: Date;
  shippedDate?: Date;
  deliveredDate?: Date;
  cancellationDate?: Date;
  subtotal: number;
  discountAmount: number;
  shippingCost: number;
  taxAmount: number;
  totalAmount: number;
  currency: string;
  paymentMethod?: string;
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  trackingNumber?: string;
  notes?: string;
  couponCode?: string;
  createdAt: Date;
  updatedAt: Date;
}