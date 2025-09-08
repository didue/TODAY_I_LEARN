import { ActivatedRouteSnapshot, ResolveFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductApi } from './product.api';
import { catchError, of } from 'rxjs';

export const productsDetailResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot) => {
  const api = inject(ProductApi);
  const router = inject(Router);
  const http = inject(HttpClient);

  const id = Number(route.paramMap.get('id'));

  if (!Number.isFinite(id)) {
    //id가 숫자가 아니면 목록으로 바이패스
    router.navigateByUrl('/products');
    return of(null);
  }

  return api.getById(id).pipe(
    catchError(() => {
      router.navigateByUrl('/products');
      return of(null);
    })
  );
};
