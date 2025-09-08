# 라우팅(Standalone)

Angular에서의 라우팅 standalone 구성은 아래와 같이 한다.
페이지 전환 & 지연로딩시 Route 사용

## 페이지 로딩

일반적인 방법으로, **즉시로딩(즉시 번들 포함)** 하는 방법이다. 앱 시작 번들에 이 컴포넌트의 코드가 포함되도록 함.

```javascript
import { Routes } from '@angular/router';
import { HomePage } from './features/home/home-page/home-page';
import { ProductsPage } from './features/products/products-page/products-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  {
    path: 'products',
    component: ProductsPage, //일반 페이징 컴포넌트 로딩 바인딩
  },
  { path: '**', redirectTo: '' },
];
```

### 지연로딩

해당 라우트에 **진입**할 떄 네트워크로 청크를 받아와 **지연 로딩(코드 스플리팅)**한다.

```javascript
import { Routes } from '@angular/router';
import { HomePage } from './features/home/home-page/home-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  {
    path: 'products',
    // 지연 로딩: 단일 컴포넌트도 loadComponent로 가능
    loadComponent: () =>
      import('./features/products/products-page/products-page').then((m) => m.ProductsPage),
  },
  { path: '**', redirectTo: '' },
];
```

#### 언제 지연로딩을 해야할까?

아래 중 두세 개 이상 해당하면 거의 무조건 지연 로딩이 이득이야.

- 초기 진입에 필요 없는 화면: 설정/공지/도움말/관리자/통계 등 “접속 후 한참 뒤에나 들어갈” 페이지
- 무거운 의존성: 차트, 에디터, 맵, 큰 UI 라이브러리(예: chart.js, monaco-editor, leaflet 등)
- 낮은 방문 빈도: 마케팅/기획전 상세, TOS, 개인정보처리방침 등
- 경로가 많을 때: 대형 앱의 서브 영역(주문/정산/리포트 등)을 각자 청크로 쪼개기
- A/B, 권한 분기: canMatch 등과 조합해 특정 사용자만 접근하는 라우트 분리

※ 반대로, 메인 홈/핵심 경로처럼 “첫 렌더에 꼭 필요한 화면”은 component:로 즉시 포함하는 게 보통 더 빠름!

## 라우팅 고급 패턴

### 1) Guard

라우트 접근제어 방식으로 `Guard`는 특정 라우트에 들어가기전에 조건을 검사하는 장치.
→ 라우트 매칭 "자체"를 막는 방식이라 SSR/프리렌더링에서도 안정

ex)
`products/new`는 로그인이 안되어있으면 라우트 매칭 불가하도록 하는 예제

```typescript
// src/app/core/products.resolver.ts
import { CanMatchFn } from '@angular/router';

export const authGuard: CanMatchFn = (route, segments) => {
  const loggedIn = !!localStorage.getItem('token'); // 단순 예시
  if (!loggedIn) {
    alert('로그인이 필요합니다!');
  }
  return loggedIn;
};
```

```typescript
// src/app/app.routes.ts
{
  path: 'products/new',
  canMatch: [authGuard],
  loadComponent: () =>
    import('./features/products/product-create/product-create')
      .then(m => m.ProductCreate),
}
```

💡 `Guard + Resolver`의 조합?

- Guard : 권한/조건검사
- Resolver : 데이터 준비

### 2)Resolver

리졸버는 **라우트 진입 전 데이터 로딩**을 보장해 줌
→ 컴포넌트는 들어오자마자 준비된 데이터를 바로 쓸 수 있는 장점!
→ 리졸버가 route 주소를 미리 요청해서 `ActivatedRoute.data.initial`로 넘겨줌

ex) 상품목록 리졸버

```typescript
// src/app/core/products.resolver.ts
import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export const productsResolver: ResolveFn<any> = () => {
  const http = inject(HttpClient);
  return http.get('/api/products');
};
```

```typescript

```
