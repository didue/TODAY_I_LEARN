import { Component, computed, inject, signal } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProductItem } from '../product-item/product-item';
import { ProductService } from '../../../core/product/product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CartService } from '../../../core/cart/cart.service';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [NgFor, RouterLink, ProductItem],
  templateUrl: './products-page.html',
  styleUrl: './products-page.scss',
})
export class ProductsPage {
  //Route
  private route = inject(ActivatedRoute);
  //Service
  private productSvc = inject(ProductService); //상품
  private cartSvc = inject(CartService); //장바구니

  initial = this.route.snapshot.data['initial']; //리졸버 데이터

  // 서비스에서 신호 읽기
  products = this.productSvc.products;
  likedCount = this.productSvc.likedCount;
  itemCount = this.cartSvc.itemCount;

  // 검색어(로컬 상태)
  q = signal('');
  filtered = computed(() => {
    const q = this.q().trim().toLowerCase();
    if (!q) return this.products();
    return this.products().filter((p) => p.name.toLowerCase().includes(q));
  });

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.q.set(value);
  }
  onToggleLike(id: number) {
    this.productSvc.toggleLike(id);
  }
  onAddToCart(id: number) {
    console.log('🚀 ~ ProductsPage ~ onAddToCart ~ onAddToCart:', id);
    const product = this.products().find((l) => l.id === id);
    if (product) this.cartSvc.add(product, 1);
  }
}
