import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product, Seller } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: '1',
      name: 'iPhone 15 Pro Max',
      image: 'https://via.placeholder.com/300x300?text=iPhone+15+Pro',
      description: 'Latest Apple flagship smartphone',
      category: 'Electronics',
      lowestPrice: 1099,
      sellerCount: 12,
      rating: 4.8,
      reviewCount: 2541,
      sellers: [
        {
          id: 's1',
          name: 'Amazon',
          logo: 'https://via.placeholder.com/100x50?text=Amazon',
          price: 1099,
          availability: 'In Stock',
          rating: 4.8,
          reviewCount: 1200,
        },
        {
          id: 's2',
          name: 'BestBuy',
          logo: 'https://via.placeholder.com/100x50?text=BestBuy',
          price: 1120,
          availability: 'In Stock',
          rating: 4.7,
          reviewCount: 890,
        },
        {
          id: 's3',
          name: 'Apple Store',
          logo: 'https://via.placeholder.com/100x50?text=Apple',
          price: 1099,
          availability: 'In Stock',
          rating: 4.9,
          reviewCount: 451,
        },
      ],
    },
    {
      id: '2',
      name: 'Samsung Galaxy S24',
      image: 'https://via.placeholder.com/300x300?text=Samsung+S24',
      description: 'High-performance Android smartphone',
      category: 'Electronics',
      lowestPrice: 799,
      sellerCount: 15,
      rating: 4.7,
      reviewCount: 1890,
      sellers: [
        {
          id: 's4',
          name: 'Amazon',
          logo: 'https://via.placeholder.com/100x50?text=Amazon',
          price: 799,
          availability: 'In Stock',
          rating: 4.8,
          reviewCount: 1100,
        },
        {
          id: 's5',
          name: 'Walmart',
          logo: 'https://via.placeholder.com/100x50?text=Walmart',
          price: 815,
          availability: 'In Stock',
          rating: 4.6,
          reviewCount: 790,
        },
        {
          id: 's6',
          name: 'Samsung Official',
          logo: 'https://via.placeholder.com/100x50?text=Samsung',
          price: 799,
          availability: 'Limited Stock',
          rating: 4.9,
          reviewCount: 320,
        },
      ],
    },
    {
      id: '3',
      name: 'Sony WH-1000XM5 Headphones',
      image: 'https://via.placeholder.com/300x300?text=Sony+XM5',
      description: 'Premium noise-cancelling headphones',
      category: 'Audio',
      lowestPrice: 349,
      sellerCount: 10,
      rating: 4.9,
      reviewCount: 5234,
      sellers: [
        {
          id: 's7',
          name: 'Amazon',
          logo: 'https://via.placeholder.com/100x50?text=Amazon',
          price: 349,
          availability: 'In Stock',
          rating: 4.8,
          reviewCount: 3000,
        },
        {
          id: 's8',
          name: 'B&H Photo',
          logo: 'https://via.placeholder.com/100x50?text=BH+Photo',
          price: 349,
          availability: 'In Stock',
          rating: 4.9,
          reviewCount: 1200,
        },
        {
          id: 's9',
          name: 'Best Buy',
          logo: 'https://via.placeholder.com/100x50?text=BestBuy',
          price: 379,
          availability: 'In Stock',
          rating: 4.7,
          reviewCount: 1034,
        },
      ],
    },
    {
      id: '4',
      name: 'iPad Pro 12.9"',
      image: 'https://via.placeholder.com/300x300?text=iPad+Pro',
      description: 'Powerful tablet for professionals',
      category: 'Electronics',
      lowestPrice: 1299,
      sellerCount: 8,
      rating: 4.8,
      reviewCount: 3421,
      sellers: [
        {
          id: 's10',
          name: 'Apple Store',
          logo: 'https://via.placeholder.com/100x50?text=Apple',
          price: 1299,
          availability: 'In Stock',
          rating: 4.9,
          reviewCount: 1500,
        },
        {
          id: 's11',
          name: 'Amazon',
          logo: 'https://via.placeholder.com/100x50?text=Amazon',
          price: 1299,
          availability: 'In Stock',
          rating: 4.8,
          reviewCount: 1200,
        },
        {
          id: 's12',
          name: 'Best Buy',
          logo: 'https://via.placeholder.com/100x50?text=BestBuy',
          price: 1319,
          availability: 'In Stock',
          rating: 4.7,
          reviewCount: 721,
        },
      ],
    },
    {
      id: '5',
      name: 'Dell XPS 13 Laptop',
      image: 'https://via.placeholder.com/300x300?text=Dell+XPS',
      description: 'Ultrabook laptop for productivity',
      category: 'Computers',
      lowestPrice: 999,
      sellerCount: 9,
      rating: 4.7,
      reviewCount: 2156,
      sellers: [
        {
          id: 's13',
          name: 'Dell Official',
          logo: 'https://via.placeholder.com/100x50?text=Dell',
          price: 999,
          availability: 'In Stock',
          rating: 4.8,
          reviewCount: 890,
        },
        {
          id: 's14',
          name: 'Amazon',
          logo: 'https://via.placeholder.com/100x50?text=Amazon',
          price: 1019,
          availability: 'In Stock',
          rating: 4.7,
          reviewCount: 800,
        },
        {
          id: 's15',
          name: 'Best Buy',
          logo: 'https://via.placeholder.com/100x50?text=BestBuy',
          price: 1029,
          availability: 'In Stock',
          rating: 4.6,
          reviewCount: 466,
        },
      ],
    },
    {
      id: '6',
      name: 'MacBook Pro 16"',
      image: 'https://via.placeholder.com/300x300?text=MacBook+Pro',
      description: 'Professional laptop for creatives',
      category: 'Computers',
      lowestPrice: 2499,
      sellerCount: 7,
      rating: 4.9,
      reviewCount: 1876,
      sellers: [
        {
          id: 's16',
          name: 'Apple Store',
          logo: 'https://via.placeholder.com/100x50?text=Apple',
          price: 2499,
          availability: 'In Stock',
          rating: 4.9,
          reviewCount: 1000,
        },
        {
          id: 's17',
          name: 'Amazon',
          logo: 'https://via.placeholder.com/100x50?text=Amazon',
          price: 2499,
          availability: 'In Stock',
          rating: 4.8,
          reviewCount: 600,
        },
        {
          id: 's18',
          name: 'B&H Photo',
          logo: 'https://via.placeholder.com/100x50?text=BH+Photo',
          price: 2549,
          availability: 'In Stock',
          rating: 4.9,
          reviewCount: 276,
        },
      ],
    },
  ];

  constructor() {}

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: string): Observable<Product | undefined> {
    return of(this.products.find((p) => p.id === id));
  }

  searchProducts(query: string): Observable<Product[]> {
    const filtered = this.products.filter(
      (p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
    );
    return of(filtered);
  }
}
