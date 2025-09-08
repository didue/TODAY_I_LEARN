import { isPlatformBrowser } from '@angular/common';
import { computed, effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { Product } from '../product/product.service';

export type CartLine = {
  id: number;
  name: string;
  price: number;
  qty: number;
};

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  //장바구니 라인들
  private readonly _lines = signal<CartLine[]>([]);
  readonly lines = this._lines.asReadonly();

  //파생값
  readonly itemCount = computed(() => this._lines().reduce((sum, l) => sum + l.qty, 0));
  readonly subtotal = computed(() => this._lines().reduce((sum, l) => sum + l.qty * l.price, 0));

  //로컬스토리지 저장
  constructor() {
    if (this.isBrowser) {
      try {
        const raw = localStorage.getItem('cart:v1');
        if (raw) this._lines.set(JSON.parse(raw));
      } catch {}

      effect(() => {
        try {
          localStorage.setItem('cart:v1', JSON.stringify(this._lines()));
        } catch {}
      });
    }
  }

  add(p: Product, qty = 1) {
    this._lines.update((list) => {
      const i = list.findIndex((l) => l.id === p.id);
      if (i >= 0) {
        const next = [...list];
        next[i] = { ...next[i], qty: next[i].qty + qty };
        return next;
      }
      return [...list, { id: p.id, name: p.name, price: p.price, qty }];
    });
  }

  remove(id: number) {
    this._lines.update((list) => list.filter((l) => l.id !== id));
  }

  setQty(id: number, qty: number) {
    if (qty) return this.remove(id);
    this._lines.update((list) => list.map((l) => (l.id === id ? { ...l, qty } : l)));
  }

  clear() {
    this._lines.set([]);
  }
}
