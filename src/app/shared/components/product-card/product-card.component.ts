import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  imports: [CommonModule]
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter<Product>();
  @Output() toggleFavorite = new EventEmitter<Product>();

  get hasImage(): boolean {
    if (typeof this.product.image === 'string') {
      return (this.product.image as string).length > 0;
    }
    return false;
  }

  get hasRating(): boolean {
    return this.product.rating !== undefined && this.product.rating !== null;
  }

  get discountPercentage(): number | null {
    // This would normally be calculated from oldPrice and currentPrice
    // For now, we'll assume it's part of the product model or passed separately
    return null;
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

  onToggleFavorite(): void {
    this.toggleFavorite.emit(this.product);
  }
}