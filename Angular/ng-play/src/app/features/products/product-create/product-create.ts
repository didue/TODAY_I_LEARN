import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductApi } from '../../../core/product/product.api';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './product-create.html',
  styleUrl: './product-create.scss',
})
export class ProductCreate {
  //api주입
  private api = inject(ProductApi);
  //router 주입
  private router = inject(Router);

  form = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)],
    }),
    price: new FormControl<number | null>(null, {
      validators: [Validators.required, Validators.min(0)],
    }),
  });

  //입력 이벤트 핸들러
  onNameInput(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.form.controls.name.setValue(value);
  }

  onPriceInput(e: Event) {
    const raw = (e.target as HTMLInputElement).value;
    const num = raw === '' ? null : +raw;
    this.form.controls.price.setValue(Number.isFinite(num as number) ? (num as number) : null);
  }

  submitting = false;
  errorMsg = '';

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting = true;
    this.errorMsg = '';

    const { name, price } = this.form.getRawValue();
    this.api.create({ name: name!, price: price! }).subscribe({
      next: () => {
        this.submitting = false;
        this.router.navigateByUrl('/products');
      },
      error: (error) => {
        this.submitting = false;
        this.errorMsg = '등록에 실패했어요. 잠시 후 다시 시도해 주세요';
        console.error(error);
      },
    });
  }
}
