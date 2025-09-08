import { Routes } from '@angular/router';
import { HomePage } from './features/home/home-page/home-page';
import { productsResolver } from './core/product/products.resolver';
import { authGuard } from './core/guard/auth.gard';
import { CartPage } from './features/cart/cart-page/cart-page';

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
    resolve: { initial: productsResolver },
  },
  {
    path: 'products/:id',
    // canMatch: [authGuard], //로그인된 사용자만 접근 가능
    loadComponent: () =>
      import('./features/products/product-detail/product-detail').then((m) => m.ProductDetail),
    resolve: { detail: productsResolver },
  },
  {
    path: 'cart',
    // loadComponent: () => import('./features/cart/cart-page').then((m) => m.CartPage),
    component: CartPage,
  },
  { path: '**', redirectTo: '' },
];
