import { CouponType } from './enums';

/**
 * Модель купона
 */
export interface Coupon {
  id: string;
  code: string;
  type: CouponType;
  value: number; // Сумма или процент скидки
  discountAmount?: number; // Сумма скидки (если фиксированная)
  minimumOrderAmount?: number; // Минимальная сумма заказа для применения купона
  usageLimit?: number; // Лимит использования купона
  usedCount: number; // Количество использований
  isActive: boolean;
  startDate?: Date;
  endDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  description?: string;
}