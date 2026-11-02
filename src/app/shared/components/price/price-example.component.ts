import { Component } from '@angular/core';

@Component({
  selector: 'nova-price-example',
  template: `
    <div class="example">
      <h3>Price Examples</h3>
      
      <div class="example__row">
        <nova-price 
          [currentPrice]="1299" 
          [oldPrice]="1599" 
          [discount]="19"
          currency="RUB"
          oldPriceLabel="Старая цена"
          discountLabel="Скидка">
        </nova-price>
      </div>
      
      <div class="example__row">
        <nova-price 
          [currentPrice]="2499" 
          [oldPrice]="2999"
          currency="USD"
          oldPriceLabel="Previous price"
          discountLabel="Discount">
        </nova-price>
      </div>
      
      <div class="example__row">
        <nova-price 
          [currentPrice]="899">
        </nova-price>
      </div>
    </div>
  `,
  styleUrls: ['./price-example.component.scss']
})
export class PriceExampleComponent {
}