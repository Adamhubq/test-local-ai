import { Component } from '@angular/core';
import { CatalogComponent } from '../catalog/catalog.component';
import { FilterComponent } from '../filter/filter.component';
import { MenuComponent } from '../menu/menu.component';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [CatalogComponent, FilterComponent, MenuComponent, ProductCardComponent],
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent {
  title = 'UI Components Showcase';
}