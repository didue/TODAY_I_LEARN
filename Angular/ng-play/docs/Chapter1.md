# Learn Angular

## Angular 개념 정리

- Directives : 커스텀속성과 element로 구성된 확장 html 구조체
- Module
- Controller : 비즈니스로직을 구현하는 데에만 사용 (DOM직접탐색 불가,input handle 불가)
  Controller > Scope > Virtual DOM
- Service : 재사용할 수 있는 비즈니스 로직 구현

## Intro

src/main.ts 가 보통 애플케이션 부트스트랩 진입점
→ `main.ts`에는 `bootstrapApplicaion(AppComponent, appConfig)` 형식으로 앱을 띄움.
(\* 리액트 index.ts의 createRoot(<App/>) 과 유사함)
→ 루트 템플릿인 `app.component.html`에 템플릿을 추가하여 화면을 바인딩

### 컴포넌트 생성 및 템플릿 바인딩

```bash
ng g c feature/counter --standalone --flat=false
```

### 템플릿 문법

💡 템플릿 문법 핵심

- `{{ }}`: 인터폴레이션(값 표시)
- `(click)`: 이벤트 바인딩 (리액트의 onClick)
- `[prop]`: 프로퍼티 바인딩 (리액트의 props와 유사)
- `[(ngModel)]`: 양방향 바인딩(오늘은 생략, 폼에서 다룸)

### 앵귤러 컴포넌트

```javascript
//app.ts
@Component({
  selector: '', //
  imports: [], //부트스트랩할 컴포넌트를 지정
  templateUrl: '', //
  styleUrl: '', //
})
export class App {}
```

## Angular의 Module시스템

### Module 알아보기

세부 구현이 숨겨진 상태로 공개API를 이용해 다른 코드에서 재사용이 가능한 코드
