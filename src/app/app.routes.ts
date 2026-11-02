import { Route } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { ComponentsComponent } from './components/components.component';

export const routes: Route[] = [
  {
    path: '',
    redirectTo: '/catalog',
    pathMatch: 'full'
  },
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: 'components',
    component: ComponentsComponent
  }
];
