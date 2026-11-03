import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CartComponent
      }
    ])
  ],
  providers: [
    CurrencyPipe
  ]
})
export class CartModule { }