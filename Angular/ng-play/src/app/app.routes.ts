import { Routes } from '@angular/router';
import { HomePage } from './features/home/home-page/home-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  {
    path: 'products',
    // 지연 로딩: 단일 컴포넌트도 loadComponent로 가능
    loadComponent: () =>
      import('./features/products/products-page/products-page').then((m) => m.ProductsPage),
  },
  {
    path: 'products/new',
    loadComponent: () =>
      import('./features/products/product-create/product-create').then((m) => m.ProductCreate),
  },
  { path: '**', redirectTo: '' },
];
