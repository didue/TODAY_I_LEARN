# Chapter2

## Store

`signal`로 보관할 전역 상태 변수 관리 및 `computed`로 파생값 관리

## 컴포넌트 통신(@Input/@Output)

앵귤러에서 부모 자식 컴포넌트간에 데이터를 주고 받고 싶을 때 사용하는 데코레이터로 @Input/@Output이 있다.

### `@Input`

- 부모컴포넌트에서 자식컴포넌트로 데이터를 전송할때 사용
- 자식컴포넌트에서 @Input() 데코레이터를 통해서 데이터를 전송받는다. 대문자로 시작함에 유의하자.
- 헤더에 타이틀이 바뀔때 @Input() 데코레이터를 통해서 컴포넌트별로 타이틀값만 넣어주는 방식으로 구현할수도있다.

### `@Output`

## 서비스/DI

## 라우팅(Standalone)

\*How to use `ng`
`ng`는 `NgModule`로 앵귤러 모듈
💡 `ng g`는 **generate** (코드생성)이고, `g` 또는 `c` 스케메틱은 각각 의미를 갖는다.

### `ng g c` = generate component

- 기본 생성물
  - .ts (컴포넌트 클래스, @Component 데코레이터 포함)
  - .html (템플릿)
  - .scss (스타일)
  - .spec.ts (테스트) ← 원하면 --skip-tests로 생략 가능
- CLI 최신 버전에서 --standalone 옵션 주면 자동으로 standalone: true 붙여줌.
- React로 치면 "새로운 함수형 컴포넌트 파일"을 생성해주는 커맨드

## `ng g s` = generate service

- 서비스 클래스(`@Injectable`)을 만들어줌
- Angular의 의존성 주입(DI) 시스템에서는 `로직/상태 관리용` 클래스로 사용
  (보통 providedIn: 'root'라서 전역 싱글턴처럼 동작)
- 기본생성물
  - .ts (서비스 클래스)
  - .spec.ts (테스트)
- React 비교: 서비스는 리덕스 store, Context provider, 커스텀 훅 같은 “상태/로직 공유 계층”이라고 생각하면 편함
