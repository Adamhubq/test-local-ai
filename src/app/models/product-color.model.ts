/**
 * Модель цвета продукта
 */
export interface ProductColor {
  id: string;
  name: string;
  code: string; // HEX код цвета
  createdAt: Date;
}