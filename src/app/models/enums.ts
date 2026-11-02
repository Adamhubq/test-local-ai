/**
 * Статусы заказа
 */
export enum OrderStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  PROCESSING = 'processing',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled',
  RETURNED = 'returned'
}

/**
 * Статусы продукта
 */
export enum ProductStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  OUT_OF_STOCK = 'out_of_stock',
  DISCONTINUED = 'discontinued'
}

/**
 * Роли пользователей
 */
export enum UserRoles {
  CUSTOMER = 'customer',
  ADMIN = 'admin',
  MODERATOR = 'moderator',
  SUPER_ADMIN = 'super_admin'
}

/**
 * Типы купонов
 */
export enum CouponType {
  PERCENTAGE = 'percentage',
  FIXED_AMOUNT = 'fixed_amount'
}

/**
 * Типы адреса
 */
export enum AddressType {
  HOME = 'home',
  WORK = 'work',
  OTHER = 'other'
}