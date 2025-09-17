import { Component, inject, input, output } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Product } from '../../../core/product/product.service';

@Component({
  selector: 'app-product-item',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './product-item.html',
  styleUrl: './product-item.scss',
})
export class ProductItem {
  //router 주입
  private router = inject(Router);

  // 최신 문법: input()/output() (v16+)
  product = input.required<Product>();

  //이벤트 상태 변수
  toggleLike = output<number>(); //좋아요
  addToCart = output<number>(); //장바구니

  onClickHeart() {
    this.toggleLike.emit(this.product().id);
  }
  onClickCart() {
    this.addToCart.emit(this.product().id);
  }
  goDetail(product: Product) {
    this.router.navigate(['/products', product.id], { state: { product } });
  }
}
