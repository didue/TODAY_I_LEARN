import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../../core/product/product.api';

@Component({
  selector: 'app-product-detail',
  imports: [NgIf, RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  private route = inject(ActivatedRoute);

  product = this.route.snapshot.data['detail'] as Product | null;
}
