import { Component, input, output } from '@angular/core';
import { Product } from '../../../core/product/product.service';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.html',
  styleUrl: './product-item.scss',
})
export class ProductItem {
  // 최신 문법: input()/output() (v16+)
  product = input.required<Product>();
  toggleLike = output<number>(); // id 방출

  onClickHeart() {
    this.toggleLike.emit(this.product().id);
  }
}
