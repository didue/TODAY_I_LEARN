# @defer과 지연 렌더링

💡왜 필요할까?

- 큰 페이지에서 모든 컴포넌트를 한 번에 그리면 초기 로딩이 무거워져.
- SSR에서도 중요: 초기 HTML은 빠르게 보내고, 무거운 UI(차트, 광고, 추천상품)는 나중에 불러와도 됨.
- React에서 Suspense/Code Splitting 하듯이, Angular는 `@defer` 블록으로 해결.

## How to Use

```html
<!-- src/app/home/home-page.html -->
<h2>홈 화면</h2>

@defer (on viewport) {
<app-heavy-widget></app-heavy-widget>
} @placeholder {
<p>로딩 중…</p>
} @error {
<p>불러오는 중 오류!</p>
}
```

- `@defer` : 화면에 보일때 로드
- `@placeholder` : 로드 전 임시 표시
- `@error` : 실패시 표시

### 트리거 옵션

- on viewport → 이 블록이 뷰포트에 들어왔을 때
- on idle → 브라우저가 한가할 때
- on timer(2000ms) → 2초 뒤에
- on interaction(btn) → 특정 DOM 이벤트 발생 시
- when expr → 표현식이 true가 될 때

```html
@defer (on idle) { ... }
<!-- 브라우저 쉬는 시간 -->
@defer (on timer(5000ms)) { ... }
<!-- 5초 뒤 -->
@defer (on interaction(#btn)) { ... }
<!-- 버튼 누르면 -->
```

Example)
상품 상세에서 관련 추천 상품 노출일 경우
→ 사용자가 상세페이지를 열자마자 핵심데이터(상품명/가격)는 즉시 조회
→ 스크롤을 내리면 `RelatedProducts` 뷰포트에 닿으면 추천상품이 동적으로 로드

```html
<!-- product-detail.html -->
<h2>{{ product.name }}</h2>
<p>가격: {{ product.price | number }}원</p>

<!-- 추천상품은 나중에 불러오기 -->
@defer (on viewport) {
<app-related-products [id]="product.id"></app-related-products>
} @placeholder {
<p>추천상품 불러오는 중…</p>
}
```
