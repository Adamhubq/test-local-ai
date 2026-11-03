import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CatalogComponent } from './catalog.component';
import { FilterComponent } from './components/filter/filter.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SearchComponent } from '../search/search.component';
import { SharedModule } from '../../shared/shared.module';
import { SidebarNavigationComponent } from '../../shared/components/sidebar-navigation/sidebar-navigation.component';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';

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
  ]
})
export class CatalogModule { }