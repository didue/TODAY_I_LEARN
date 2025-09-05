import { Component, computed, inject, signal } from '@angular/core';
import { ProductService } from '../../../core/product/product.service';
import { ProductItem } from '../product-item/product-item';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [NgFor, ProductItem],
  templateUrl: './products-page.html',
  styleUrl: './products-page.scss',
})
export class ProductsPage {
  //service 클래스 inject
  private productSvc = inject(ProductService);

  //서비스 신호 읽기
  products = this.productSvc.products;
  likedCount = this.productSvc.liekdCount;

  //검색어 변수(로컬 상태 값)
  q = signal('');
  //필터 검색결과
  filterd = computed(() => {
    const q = this.q().trim().toLowerCase();
    if (!q) return this.products();
    return this.products().filter((p) => p.name.toLowerCase().includes(q));
  });

  onToggleLike(id: number) {
    this.productSvc.toggleLike(id);
  }
}
