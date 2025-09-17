# Angular Form

💡 Reactive Forms + Signals

- Template-driven form(ngModel)도 있지만, 최근 Angular는 Reactive Forms를 권장.
- 장점:
  - 타입 안전 + 명시적 제어
  - 동적 폼 생성 쉬움
  - FormControl 값 변화를 signal처럼 reactive하게 다룰 수 있음 (Angular 16+부터 toSignal 지원)

### Reactive Form

Example)

클래식한 Angular에서 form은 `Template-driven Form(ngModule)`을 사용하였지만, `Reactive Form`을 권장

```typescript
//login-page.ts
@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], //✅ Reactive Form
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  form = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)],
    }),
  });
}
```

```html
<h2>로그인</h2>

<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <div>
    <label>Email</label>
    <input type="email" formControlName="email" />
    @if (form.controls.email.invalid && form.controls.email.touched) {
    <span class="error">이메일을 올바르게 입력하세요.</span>
    }
  </div>

  <div>
    <label>Password</label>
    <input type="password" formControlName="password" />
    @if (form.controls.password.errors?.['minlength'] && form.controls.password.touched) {
    <span class="error">비밀번호는 최소 6자 이상이어야 합니다.</span>
    }
  </div>

  <button type="submit" [disabled]="form.invalid">로그인</button>
</form>
```

### toSignal

Angular 16+ 이후 부터 `toSignal`로 FormControl → signal로 변환 가능

```typescript
import { toSignal } from '@angular/core/rxjs-interop';

email = toSignal(this.form.controls.email.valueChange, { initialVlaue: '' });
```

```html
<p>입력 중인 이메일: {{ email() }}</p>
```
