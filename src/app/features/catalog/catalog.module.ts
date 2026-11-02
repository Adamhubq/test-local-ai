import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CatalogComponent } from './catalog.component';
import { FilterComponent } from './components/filter/filter.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [
    CatalogComponent,
    FilterComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CatalogComponent
  ]
})
export class CatalogModule { }