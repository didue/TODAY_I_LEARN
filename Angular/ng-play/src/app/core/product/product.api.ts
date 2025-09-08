// src/app/core/product.api.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type CreateProductDto = { name: string; price: number };
export type Product = { id: number; name: string; price: number; liked: boolean };

@Injectable({ providedIn: 'root' })
export class ProductApi {
  private http = inject(HttpClient);
  private base = '/api'; // 개발 프록시 or mock 서버 기준

  create(dto: CreateProductDto) {
    return this.http.post<Product>(`${this.base}/products`, dto);
  }

  getAll() {
    return this.http.get<Product[]>(`${this.base}/products`);
  }
  getById(id: number) {
    return this.http.get<Product[]>(`${this.base}/products/${id}`);
  }
}
