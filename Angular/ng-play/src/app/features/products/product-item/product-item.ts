import { Component, input, output } from '@angular/core';
import { Product } from '../../../core/product/product.service';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.scss',
})
export class ProductItem {
  //💡최신문법: input(), output() (v16+)
  product = input.required<Product>();
  toggleLike = output<number>(); // id방출

  onClickHeart() {
    this.toggleLike.emit(this.product().id);
  }
}
