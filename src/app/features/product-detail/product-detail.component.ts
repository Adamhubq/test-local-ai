import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { CartService } from '../../core/services/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  imports: [CurrencyPipe]
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    // In a real app, we would fetch the product by slug from a service
    // For now, we'll simulate this with mock data
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      // This is a simplified version - in reality you'd have a ProductService
      // that fetches products by slug from an API or mock data
      this.loadProductBySlug(slug);
    });
  }

  private loadProductBySlug(slug: string): void {
    // This would normally be replaced with actual service call
    // For now, we'll simulate by finding product in mock data
    const mockProducts = [
      {
        id: 1,
        name: 'Wireless Headphones',
        description: 'High-quality wireless headphones with noise cancellation',
        price: 199.99,
        category: 'Electronics',
        brand: 'AudioTech',
        image: 'assets/images/headphones.jpg',
        inStock: true
      },
      {
        id: 2,
        name: 'Running Shoes',
        description: 'Comfortable running shoes for daily exercise',
        price: 89.99,
        category: 'Footwear',
        brand: 'StrideWear',
        image: 'assets/images/shoes.jpg',
        inStock: true
      }
    ];

    this.product = mockProducts.find(p => p.id === parseInt(slug, 10)) || null;
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product);
    }
  }
}