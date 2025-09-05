import { Routes } from '@angular/router';
import { HomePage } from './features/home/home-page/home-page';
import { ProductsPage } from './features/products/products-page/products-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'products', component: ProductsPage },
  { path: '**', redirectTo: '' },
];
