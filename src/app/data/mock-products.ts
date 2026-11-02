import { Product } from '../core/models/product.model';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Smartphone XYZ',
    description: 'Latest smartphone with advanced features',
    price: 699.99,
    category: 'Electronics',
    imageUrl: '/assets/images/smartphone.jpg',
    inStock: true,
    rating: 4.5,
    tags: ['new', 'popular']
  },
  {
    id: 2,
    name: 'Laptop ABC',
    description: 'High-performance laptop for professionals',
    price: 1299.99,
    category: 'Electronics',
    imageUrl: '/assets/images/laptop.jpg',
    inStock: true,
    rating: 4.8,
    tags: ['bestseller']
  },
  {
    id: 3,
    name: 'Cotton T-Shirt',
    description: 'Comfortable cotton t-shirt for everyday wear',
    price: 29.99,
    category: 'Clothing',
    imageUrl: '/assets/images/tshirt.jpg',
    inStock: false,
    rating: 4.2,
    tags: ['sale']
  },
  {
    id: 4,
    name: 'Running Shoes',
    description: 'Lightweight running shoes with extra cushioning',
    price: 89.99,
    category: 'Footwear',
    imageUrl: '/assets/images/shoes.jpg',
    inStock: true,
    rating: 4.6,
    tags: ['new']
  },
  {
    id: 5,
    name: 'Coffee Maker',
    description: 'Automatic coffee maker with timer function',
    price: 79.99,
    category: 'Home Appliances',
    imageUrl: '/assets/images/coffee-maker.jpg',
    inStock: true,
    rating: 4.3,
    tags: ['popular']
  },
  {
    id: 6,
    name: 'Backpack',
    description: 'Durable backpack with multiple compartments',
    price: 49.99,
    category: 'Accessories',
    imageUrl: '/assets/images/backpack.jpg',
    inStock: true,
    rating: 4.7,
    tags: ['bestseller']
  }
];