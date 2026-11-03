import { Product } from '../models/product.model';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Smartphone XYZ',
    description: 'Latest smartphone with advanced features',
    price: 699.99,
    category: 'Electronics',
    brand: 'TechBrand',
    image: 'assets/images/smartphone.jpg',
    inStock: true,
    rating: 4.5,
    slug: 'smartphone-xyz'
  },
  {
    id: 2,
    name: 'Laptop ABC',
    description: 'High-performance laptop for professionals',
    price: 1299.99,
    category: 'Electronics',
    brand: 'TechBrand',
    image: 'assets/images/laptop.jpg',
    inStock: true,
    rating: 4.8,
    slug: 'laptop-abc'
  }
];