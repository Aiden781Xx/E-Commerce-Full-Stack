import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'Experience crystal-clear audio with our premium wireless headphones featuring active noise cancellation and 30-hour battery life.',
    price: 299,
    originalPrice: 399,
    image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    rating: 4.8,
    reviewCount: 127,
    inStock: true,
    stock: 25,
    tags: ['wireless', 'noise-cancelling', 'premium'],
    featured: true
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Track your fitness goals with this advanced smartwatch featuring GPS, heart rate monitoring, and water resistance.',
    price: 249,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    rating: 4.6,
    reviewCount: 89,
    inStock: true,
    stock: 15,
    tags: ['fitness', 'smartwatch', 'gps'],
    featured: false
  },
  {
    id: '3',
    name: 'Designer Sunglasses',
    description: 'Stylish designer sunglasses with UV protection and premium materials for the ultimate fashion accessory.',
    price: 189,
    originalPrice: 249,
    image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    rating: 4.4,
    reviewCount: 56,
    inStock: true,
    stock: 32,
    tags: ['designer', 'sunglasses', 'fashion'],
    featured: true
  },
  {
    id: '4',
    name: 'Luxury Leather Bag',
    description: 'Handcrafted luxury leather bag perfect for work or travel. Made from genuine Italian leather with premium hardware.',
    price: 449,
    image: 'https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Fashion',
    rating: 4.9,
    reviewCount: 43,
    inStock: true,
    stock: 8,
    tags: ['leather', 'luxury', 'handcrafted'],
    featured: true
  },
  {
    id: '5',
    name: 'Ergonomic Office Chair',
    description: 'Premium ergonomic office chair with lumbar support, adjustable height, and premium materials for all-day comfort.',
    price: 399,
    originalPrice: 599,
    image: 'https://images.pexels.com/photos/586998/pexels-photo-586998.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/586998/pexels-photo-586998.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Furniture',
    rating: 4.7,
    reviewCount: 112,
    inStock: true,
    stock: 12,
    tags: ['ergonomic', 'office', 'comfort'],
    featured: false
  },
  {
    id: '6',
    name: 'Minimalist Desk Lamp',
    description: 'Modern minimalist desk lamp with adjustable brightness, USB charging port, and touch controls.',
    price: 89,
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home',
    rating: 4.3,
    reviewCount: 78,
    inStock: true,
    stock: 24,
    tags: ['minimalist', 'desk lamp', 'modern'],
    featured: false
  },
  {
    id: '7',
    name: 'Professional Camera',
    description: 'High-end professional camera with 4K video recording, weather sealing, and exceptional low-light performance.',
    price: 1299,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Electronics',
    rating: 4.9,
    reviewCount: 167,
    inStock: true,
    stock: 5,
    tags: ['professional', 'camera', '4k'],
    featured: true
  },
  {
    id: '8',
    name: 'Artisan Coffee Maker',
    description: 'Premium coffee maker with precision temperature control, built-in grinder, and programmable settings.',
    price: 349,
    image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Home',
    rating: 4.6,
    reviewCount: 94,
    inStock: true,
    stock: 18,
    tags: ['coffee', 'artisan', 'premium'],
    featured: false
  }
];

export const categories = ['All', 'Electronics', 'Fashion', 'Furniture', 'Home'];