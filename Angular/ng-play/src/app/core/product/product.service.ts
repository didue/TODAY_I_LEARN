import { computed, Injectable, signal } from '@angular/core';

export type Product = {
  id: number;
  name: string;
  price: number;
  liked: boolean;
};

@Injectable({ providedIn: 'root' })
export class ProductService {
  //signal 기반 스토어 생성
  private readonly _products = signal<Product[]>([
    { id: 1, name: 'Angular Hoodie', price: 59000, liked: false },
    { id: 2, name: 'RxJs Mug', price: 19000, liked: true },
    { id: 3, name: 'Ts Keyboard', price: 99000, liked: false },
  ]);

  //공개용 읽기 api(computed로 파생값 생성, 원본 수정X)
  readonly products = this._products.asReadonly();
  readonly liekdCount = computed(() => this._products().filter((p) => p.liked).length);

  toggleLike(id: number) {
    this._products.update((list) => list.map((p) => (p.id === id ? { ...p, liked: !p.liked } : p)));
  }

  add(name: string, price: number) {
    const id = Math.max(0, ...this._products().map((p) => p.id)) + 1;
    this._products.update((list) => [...list, { id, name, price, liked: false }]);
  }
}
