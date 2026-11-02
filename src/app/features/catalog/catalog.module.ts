import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CatalogComponent } from './catalog.component';
import { FilterComponent } from './components/filter/filter.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { SearchComponent } from '../search/search.component';
import { SidebarNavigationComponent } from '../../../components/sidebar-navigation/sidebar-navigation.component';

@NgModule({
  declarations: [
    CatalogComponent,
    FilterComponent,
    ProductListComponent,
    ProductCardComponent,
    SearchComponent,
    SidebarNavigationComponent
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