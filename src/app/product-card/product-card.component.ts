import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product?: Product;

  addToCart() {
    // Placeholder for add to cart functionality
    console.log('Added to cart:', this.product?.name);
  }
}
