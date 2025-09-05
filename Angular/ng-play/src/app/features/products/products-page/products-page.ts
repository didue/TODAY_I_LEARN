import { Component, computed, inject, signal } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProductItem } from '../product-item/product-item';
import { ProductService } from '../../../core/product/product.service';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [NgFor, ProductItem],
  templateUrl: './products-page.html',
  styleUrl: './products-page.scss',
})
export class ProductsPage {
  private svc = inject(ProductService);

  // 서비스에서 신호 읽기
  products = this.svc.products;
  likedCount = this.svc.likedCount;

  // 검색어(로컬 상태)
  q = signal('');
  filtered = computed(() => {
    const q = this.q().trim().toLowerCase();
    if (!q) return this.products();
    return this.products().filter((p) => p.name.toLowerCase().includes(q));
  });

  onToggleLike(id: number) {
    this.svc.toggleLike(id);
  }
  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.q.set(value);
  }
}
