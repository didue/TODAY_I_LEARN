import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

//imports Component
import { ProductService } from '../../../core/product/product.service';
import { RelatedProducts } from '../related-products/related-products';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink, RelatedProducts],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  private productSvc = inject(ProductService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  products = this.productSvc.products();
  productId = Number(this.route.snapshot.params['id']);
  product = this.products.find((m) => m.id === this.productId);

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state?.['product'];
  }
}
