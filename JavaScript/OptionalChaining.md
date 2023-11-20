# 옵셔널 체이닝 ‘?.'

![thumnail](./img/thumnail_optionalchaining.png)



옵셔널 체이닝 `?.`은 자바스크립트의 새로운 기능으로, 특정 객체가 `null` 또는 `undefined`인 경우에도 안전하게 속성에 접근할 수 있게 해줍니다.

### 옵셔널 체이닝이 필요한 이유

예를 들어 여러 사용자가 있을 때,  그 중 몇명은 주소 정보가 없다고 가정해봅시다. 이럴 때 `user.address.street` 을 사용하여 주소 정보를 접근하다면 에러가 발생할 수 있다.

```jsx
let user = {};

console.log(user.address.street);
// TypeError: Cannot read property 'street' of undefined
```

또 다른 사례로는 브라우저에서 동작하는 코드를 개발할 때 발생할 수 있는 문제로, `Javascript` 를 사용해 페이지에 존재하지 않는 요소를 탐색하여 정보를 가져오려고 할 때도 에러가 발생할 수 있다. 

```jsx
let html = document.querySelector('.dd-element').innerHTML;
//Uncaught TypeError: Cannot read properties of null (reading 'innerHTML')
```

명세서에 옵셔널 체이닝 `?.`이 추가되기 전에는 이러한 문제들을 해결하기 위해 `&&` 연산자를 사용하였다.

```jsx
let user = {};
console.log( user && user.address && user.address.street ); 
// undefined
```

## 옵셔널 체이닝

옵셔널 체이닝 `?.`은 바로 “앞”의 평가대상이 `undefined` 거나 `null` 이면 평가를 멈추고, `undefined`를 반환한다.

앞선 예제에서의 주소가 없는 사용자의 `user.address.street`를 옵셔널 체이닝을 사용하여 접근한다면 아래와 같다.

```jsx
let user = {};
console.log(user?.address?.street);
//undefined
```

여기서 유념할 것은 옵셔널체이닝 `?.` 앞 평가대상에만 동작하고, 확장은 되지 않는 다는 점이다. 

<aside>
💡 `?.`  앞의 변수는 ‘반드시’ 선언되어 있어야 한다!
옵셔널체이닝 앞의 변수가 선언되어 있지 않으면 평가시 에러가 발생한다. let이나 const, var를 사용해 선언이 완료된 변수를 대상으로만 동작한다.

</aside>

`?.`는 왼쪽 평가대상에 값이 없으면 즉시 평가를 종료하고 멈춘다.

참고로 이런 평가 방법을 `단락 평가(short-circuit)` 이라고 한다.

```jsx
let user = null;
let x = 0;

user?.sayHello(x++);    //nothing happend
console.log(x);         //0
```

### `?.()` 와 `?.[]`

옵셔널체이닝은 연산자가 아니다. `?.`은 함수나 대괄호와 함께 동작하는 특별한 문법 구조체(syntax construct)이다. 

함수관련 예시와 함께 존재여부가 확실치 않은 함수를 호출할 때 `?.()` 

```jsx
let user1 = {};
let user2 = {
	sayHi() {
		alert('hi');
	}
};

user1.sayHi?.();  //undefined
user2.sayHi?.();  //hi
```

user1은 sayHi의 존재 여부가 없기 때문에 평가를 멈추고 undefined이 반환되고, user2는 sayHi가 정의되어 있기 때문에 메서드가 정상 호출되었다. 

`.` 대신 대괄호 `[]` 를 사용해 객체 프로퍼티에 접근한 경우 `?.[]` 를 사용할 수도 있다. 위 예시와 마찬가지로 객체 존재여부가 확실치 않은 경우에도 안전하게 프로퍼티를 읽을 수 있다.

## 요약

<aside>
💡 옵셔널체이닝을 남용하지 말아야 하는 이유!
`?.` 은 존재하지 않아도 괜찮은 대상에만 사용해야 한다.
예시에서는 사용자 주소를 다루며 필수값이 아니라고 가정된 상황이며 user는 필수이다.  이때의 바람직한 코드는 `user.address?.street` 로 사용하는 것이다. 
개발자의 실수로 바로 알아내지 못할 경우 디버깅이 어려워지고 에러의 조기 발견이 어려워 지기 때문에 남용하지 말아야 한다.

</aside>

옵셔널 체이닝 문법 `?.`은 세 가지 형태로 사용할 수 있습니다.

1. `obj?.prop` – `obj`가 존재하면 `obj.prop`을 반환하고, 그렇지 않으면 `undefined`를 반환함
2. `obj?.[prop]` – `obj`가 존재하면 `obj[prop]`을 반환하고, 그렇지 않으면 `undefined`를 반환함
3. `obj?.method()` – `obj`가 존재하면 `obj.method()`를 호출하고, 그렇지 않으면 `undefined`를 반환함

여러 예시를 통해 살펴보았듯이 옵셔널 체이닝 문법은 꽤 직관적이고 사용하기도 쉽습니다. `?.` 왼쪽 평가 대상이 `null`이나 `undefined`인지 확인하고 `null`이나 `undefined`가 아니라면 평가를 계속 진행합니다.

`?.`를 계속 연결해서 체인을 만들면 중첩 프로퍼티들에 안전하게 접근할 수 있습니다.

`?.`은 `?.`왼쪽 평가대상이 없어도 괜찮은 경우에만 선택적으로 사용해야 합니다.

꼭 있어야 하는 값인데 없는 경우에 `?.`을 사용하면 프로그래밍 에러를 쉽게 찾을 수 없으므로 이런 상황을 만들지 말도록 합시다.