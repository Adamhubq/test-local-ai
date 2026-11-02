/**
 * Модель размера продукта
 */
export interface ProductSize {
  id: string;
  name: string; // Например: S, M, L, XL
  value: string; // Для числовых значений (например: 36, 38, 40)
  unit?: string; // Единица измерения (см, дюймы и т.д.)
  createdAt: Date;
}