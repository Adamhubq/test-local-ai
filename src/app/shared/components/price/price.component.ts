import { Component, Input } from '@angular/core';

@Component({
  selector: 'nova-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent {
  @Input() currentPrice!: number;
  @Input() oldPrice?: number;
  @Input() discount?: number;
  @Input() currency = 'RUB';
  @Input() currencyPosition: 'before' | 'after' = 'before';
  @Input() oldPriceLabel = 'Старая цена';
  @Input() discountLabel = 'Скидка';

  formatPrice(price: number): string {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: this.currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  }
}