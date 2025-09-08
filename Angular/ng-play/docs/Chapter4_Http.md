# Http

## Http 클라이언트 준비

`app.config.ts`에 `provideHttpClient` 추가

```javascript
//app.config.js
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

// 공통 인터셉터
import { authInterceptor } from './core/auth.interceptor';
import { errorInterceptor } from './core/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor, errorInterceptor])),
  ],
};
```

## API 클라이언트 연결

```javascript
// src/app/core/product.api.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type CreateProductDto = { name: string; price: number };
export type Product = { id: number; name: string; price: number; liked: boolean };

@Injectable({ providedIn: 'root' })
export class ProductApi {
  private http = inject(HttpClient);
  // 개발 프록시 or mock 서버 기준
  private base = '/api';

  create(dto: CreateProductDto) {
    return this.http.post<Product>(`${this.base}/products`, dto);
  }
}
```
