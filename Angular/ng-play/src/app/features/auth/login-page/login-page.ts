import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, map, startWith } from 'rxjs';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  private builder = inject(FormBuilder);

  //React 16이전 코드 스타일 (FormGroup)
  // form = new FormGroup({
  //   email: new FormControl('', {
  //     nonNullable: true,
  //     validators: [Validators.required, Validators.email],
  //   }),
  //   password: new FormControl('', {
  //     nonNullable: true,
  //     validators: [Validators.required, Validators.minLength(6)],
  //   }),
  // });

  //React 16이후 코드 스타일 (Reactive Form)
  //form 선언
  form = this.builder.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  //편의 접근자
  get emailCtrl(): AbstractControl {
    return this.form.controls['email'];
  }
  get pwCtrl(): AbstractControl {
    return this.form.controls['password'];
  }

  //✅ toSignal
  email = toSignal(
    this.emailCtrl.valueChanges.pipe(
      startWith(this.emailCtrl.value),
      debounceTime(300),
      map((v) => (v ?? '').toString().trim())
    ),
    { initialValue: '' }
  );

  password = toSignal(
    this.pwCtrl.valueChanges.pipe(startWith(this.pwCtrl.value), debounceTime(150)),
    { initialValue: '' }
  );

  // 🔹 파생 신호: 비번 강도 & 제출 가능 여부
  pwLength = computed(() => this.password()?.length ?? 0);
  pwStrength = computed(() => {
    const v = this.password() ?? '';
    let score = 0;
    if (v.length >= 6) score++;
    if (/[A-Z]/.test(v)) score++;
    if (/[0-9]/.test(v)) score++;
    if (/[^A-Za-z0-9]/.test(v)) score++;
    return score; // 0~4
  });

  canSubmit = computed(() => this.form.valid && !this.form.pending);

  onSubmit() {
    this.form.markAllAsTouched();
    if (!this.form.valid) return;
    console.log('로그인 시도:', this.form.getRawValue());
    // TODO: 실제 로그인 API 호출
  }

  // UX용 에러 헬퍼
  showError(ctrl: AbstractControl, key?: string): boolean {
    if (!ctrl.touched && !ctrl.dirty) return false;
    const errors = ctrl.errors ?? {};
    return key ? !!errors[key] : !!Object.keys(errors).length;
  }
}
