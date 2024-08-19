# QQ Opertator (??)

JS ES6 이상의 문법을 사용하고 있는 사람들이라면 익숙할만한 자바스크립트의 ["Nullish 연산자"](https://ko.javascript.info/nullish-coalescing-operator)를 많이 활용해왔을 것이다. 

Dart에서도 이 nullish 연산자와 비슷한 QQ 연산자(`??`)가 있어서 알아보도록 하자



## 구문 설명

`QQ 연산자(이하 ?? 연산자로 칭한다)`는 연산자를 기준으로 `left ?? right` 좌항과 우항을 비교하여 좌항이 null이면 우항을 리턴, 우항이 null이면 좌항을 리턴하는 연산자이다.


코드를 통하여 예제를 살펴보자.

<br/>

여기 name이라는 파라미터를 받아 대문자로 반환하는 함수가 있다. 

이 함수는 파라미터를 받을 수도 받지 않을 수도 있는 nullable한 파라미터를 가지는 함수이다. 

<br/>

```dart
String capitalizeName(String? name) {
    if(name != null) {
        return name.toUpperCase();
    }
    return 'anonymous';
}
```

클래식한 코드스타일의 함수에서는 위의 코드처럼 if문을 통하여 null 여부를 체크하여 각각 return을 하도록 나누었을 것이다.

<br/>

혹은 `삼항연산자`를 통하여 코드를 간소화하여 사용하였을 것이다.

```dart
String capitalizeName(String? name) => name != null? name.toUpperCase() : 'anonymous';
```

<br/>

하지만 여기서 Dart의 `?? 연산자`를 활용하면 보다 더 간결하게 정의할 수 있다.

```dart
String capitalizeName(String? name) => name.toUpperCase() ?? 'anonymous';
```

Tada-✨
가독성 면에서도 훨씬 훌륭해졌다! 개발자가 코드를 읽을 때 "name이...null이 아니면..." 따위의 사고 단계가 필요없어진게 아닌가!

<br/>

앞서 언급한 바와 같이 자바스크립트에서 Nullish 연산자를 사용해봤던 사람들이라면 이게 얼마나 편리한 문법인지 알 것이다! 


<br/>

## 확장 응용

```dart
void main() {
    String? name;
    name ??= 'didue';
}
```



<br/>
<hr/>

### 참고
- [Dart Wiki - ?? Operator](https://wikidocs.net/189089)
- [Javascript Nullish 병합연산자 '??'](https://ko.javascript.info/nullish-coalescing-operator)