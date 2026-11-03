import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    redirectTo: '/catalog',
    pathMatch: 'full'
  },
  {
    path: 'catalog',
    loadComponent: () => import('./features/catalog/catalog.component').then(m => m.CatalogComponent)
  },
  {
    path: 'components',
    loadComponent: () => import('./components/showcase.component').then(m => m.ShowcaseComponent)
  },
  {
    path: 'tokens',
    loadComponent: () => import('./design-tokens-demo.component').then(m => m.DesignTokensDemoComponent)
  },
  {
    path: 'cart',
    loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule)
  },
  {
    path: 'product/:slug',
    loadComponent: () => import('./features/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
  },
  {
    path: 'brands',
    loadChildren: () => import('./features/brands/brands.module').then(m => m.BrandsModule)
  },
  {
    path: 'brand/:slug',
    loadComponent: () => import('./features/brand/brand.component').then(m => m.BrandComponent)
  },
  {
    path: 'categories',
    loadChildren: () => import('./features/categories/categories.module').then(m => m.CategoriesModule)
  },
  {
    path: 'category/:slug',
    loadComponent: () => import('./features/categories/categories.component').then(m => m.CategoriesComponent)
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./features/wishlist/wishlist.module').then(m => m.WishlistModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./features/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'account/orders',
    loadChildren: () => import('./features/account/orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./features/search/search.module').then(m => m.SearchModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./features/contacts/contacts.module').then(m => m.ContactsModule)
  },
  {
    path: 'checkout',
    loadComponent: () => import('./features/checkout/checkout.component').then(m => m.CheckoutComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./components/not-found/not-found').then(m => m.NotFoundComponent)
  }
];