import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ProductCardComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }