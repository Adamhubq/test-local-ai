import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CatalogComponent } from './catalog.component';
import { FilterComponent } from './components/filter/filter.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SearchComponent } from '../search/search.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    CatalogComponent,
    FilterComponent,
    ProductListComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    CatalogComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class CatalogModule { }