import { AddressType } from './enums';

/**
 * Модель адреса
 */
export interface Address {
  id: string;
  userId: string;
  type: AddressType;
  firstName: string;
  lastName: string;
  company?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone?: string;
  isDefault: boolean;
  createdAt: Date;
  updatedAt: Date;
}