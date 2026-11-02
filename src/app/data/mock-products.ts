import { Product } from '../models/product.model';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Smartphone XYZ',
    description: 'Latest smartphone with advanced features',
    price: 699.99,
    category: 'Electronics',
    image: 'assets/images/smartphone.jpg',
    inStock: true,
    rating: 4.5
  },
  {
    id: 2,
    name: 'Laptop ABC',
    description: 'High-performance laptop for professionals',
    price: 1299.99,
    category: 'Electronics',
    image: 'assets/images/laptop.jpg',
    inStock: true,
    rating: 4.8
  }
];