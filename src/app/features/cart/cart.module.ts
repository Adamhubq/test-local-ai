import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { ProductCardComponent } from '../product-card/product-card.component';

@NgModule({
  declarations: [
    CartComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }