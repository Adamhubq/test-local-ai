import { Component, Input } from '@angular/core';
import { Product } from '../../../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ProductGridComponent {
  @Input() products: Product[] = [];
  @Input() loading = false;
  @Input() error: string | null = null;
  @Input() empty = false;
  @Input() columns = 4;
  @Input() gap = '16px';

  trackByProductId(index: number, product: Product): string {
    return product.id;
  }
}