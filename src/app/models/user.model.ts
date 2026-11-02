import { Address } from './address.model';
import { UserRoles } from './enums';

/**
 * Модель пользователя
 */
export interface User {
  id: string;
  email: string;
  password?: string; // Не включается в публичные данные
  firstName: string;
  lastName: string;
  phone?: string;
  avatar?: string;
  roles: UserRoles[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastLogin?: Date;
  addresses: Address[];
  wishlist?: string[]; // Массив ID продуктов в избранном
  preferences?: {
    notifications: {
      email: boolean;
      sms: boolean;
    };
    language: string;
    currency: string;
  };
}