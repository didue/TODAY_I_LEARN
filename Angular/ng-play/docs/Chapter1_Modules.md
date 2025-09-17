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

- `{{ }}`: 텍스트 바인딩. 인터폴레이션(값 표시) → 단방향 출력용
- `[prop]`: 프로퍼티 바인딩 (리액트의 props와 유사) → DOM프로퍼티/@Input
- `(click)`: 이벤트 바인딩 (리액트의 onClick) → DOM이벤트/@Output
- `[(ngModel)]`: 양방향 바인딩(오늘은 생략, 폼에서 다룸) → `props` + `propChange`
- `*directive` : 구조 지시자(템플릿 추가/제거/반복) → ex: `*ngIf`, `*ngFor`

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

## Angular 이벤트 객체 타입

Angular 템플릿에 (input)에서 받는 `$event`는 **브라우저 DOM의 네이티브 InputEvent**임
React에서 사용하던 SyntheticEvent랑 레퍼런스가 다르기때문에 이벤트 바인딩도 다르게 사용

```
onInput(e: Event) {
  const target = e.target as HTMLInputElement;
  console.log(target.value);
}
```

Event 기본형에선 target이 EventTarget | null이기때문에 .value라는 프로퍼티가 없음
=> 그래서 as HTMLInputElement로 캐스팅이 필요함!

💡 왜 ChangeEvent<HTMLInputElement>를 못 쓰는가?

ChangeEvent<T>는 React 타입 정의(@types/react) 안에 들어있는 별도의 타입이에요.
Angular 프로젝트는 React를 쓰지 않으니까, ChangeEvent라는 이름 자체가 없어요.
즉 Angular에선 ChangeEvent는 타입스크립트 표준도 아니고, DOM 타입도 아니기 때문에 그대로 쓰면 TS 에러가 납니다.

-> Angular에서 쓸 수 있는 대안?

1. 직접 캐스팅

```
onNameInput(e: Event) {
  const v = (e.target as HTMLInputElement).value;
  this.form.controls.name.setValue(v);
}
```

2. 타입 내로잉

```
onNameInput(e: Event) {
  if (!(e.target instanceof HTMLInputElement)) return;
  this.form.controls.name.setValue(e.target.value);
}
```

-> 표준DOM타입으로 권장

3. 템플릿 참조변수

```
<input #nameInput (input)="form.controls.name.setValue(nameInput.value)" />
```

-> TS쪽 코드변경이 아예 필요없어서 단순한 애플리케이션에서는 이쪽을 가장 권장

👉 즉, **Angular에서는 onNameInput(e: Event) + (e.target as HTMLInputElement)**가 정석이야.
실무에서는 코드 간결하게 하려고 템플릿 참조 변수 방식을 많이 쓰기도 하고, 복잡한 폼에선 Reactive Forms를 쓰기 때문에 이벤트 캐스팅을 직접 쓸 일은 줄어들어.
