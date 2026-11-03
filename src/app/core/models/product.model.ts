export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  image: string;
  inStock: boolean;
  rating?: number;
  slug: string;
}