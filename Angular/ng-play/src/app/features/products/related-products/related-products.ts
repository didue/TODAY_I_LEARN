import { NgFor, NgIf } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';
import { ProductApi } from '../../../core/product/product.api';
import { Product } from '../../../core/product/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-related-products',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './related-products.html',
  styleUrl: './related-products.css',
})
export class RelatedProducts {
  private api = inject(ProductApi);

  //상세페이제에서 전달해줄 상품ID
  productId = input.required<number>();

  loading = signal(true);
  error = signal<string | null>(null);
  items = signal<Product[]>([]);

  ngOnInit() {
    this.api.getRelated(this.productId()).subscribe({
      next: (list) => {
        this.items.set(list);
        this.loading.set(false);
      },
      error: (error) => {
        console.error(error);
        this.error.set('추천 상품을 불러오지 못했어요!');
        this.loading.set(false);
      },
    });
  }
}
