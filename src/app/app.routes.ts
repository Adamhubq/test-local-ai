import { Route } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { ComponentsComponent } from './components/components.component';
import { CartComponent } from './features/cart/cart.component';
import { ProductDetailComponent } from './features/product-detail/product-detail.component';

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
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  },
  {
    path: '**',
    redirectTo: '/catalog'
  }
];