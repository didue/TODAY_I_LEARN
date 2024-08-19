# Functions

파라미터는 크게 `positional parameter`와 `named parameter`가 존재한다.
positional parameter는 순서에 따라 파라미터의 값을 넣어주는 것이고, named는 '이 파라미터가 어떤 파라미터다~' 라고 명시해줌으로써 코드를 작성하는 것을 의미한다.


## Named Parameters

dart에서 function을 만들 때 arguments는 기본적으로 null이 될 수도 있다.

`named parameter`는 function 내부에서 parameter를 참조하였으나, 호출부에서 정의해주지 않아서 런타임 에러가 발생할 수 도 있는 위험을 제거하고자 할 때 사용한다.

예를 들어, 아래와 같은 sayHello라는 메소드가 있다고 정의해보자.

```dart
String sayHello(String name, int age, String country) {
    return "Hello, $name, you are $age from $country";
}
```
<br/>

이 때, named parameter로서 sayHello 메소드에 파라미터의 값을 주어지는 방법은 간단하다.

function의 선언부의 파라미터 입력 자리에 중괄호`{}`를 통해서 파라미터를 묶으면 된다.


```dart
String sayHello({String name, int age, String country}) {   //⭐ 중괄호{} 추가
    return "Hello, $name, you are $age from $country";
}

void main() {
    print(sayHello(
        age : 19, 
        name :'nico', 
        country: 'cuba'
    ));
}
```
<br/>

그러나 이렇게 해서 바로 사용하고자 하면 에디터에서 빨간 줄이 뜨면서 dart에서는 에러문구가 나타낸다!

에러문구를 해결하는 방법은 두 가지가 있다.

- default value를 받아 null safety 함수를 만든다
- `required` 예약어를 사용하여 `nullable` 하지 않은 parameter를 정의 할 수 있다.  

<br/>

첫번째 방법은 메소드의 parameter에 defualt value를 부여하여 null을 참조하지 않도록 강제하는 방법이나, 반드시 유저로부터 받아야하는 정보나 데이터를 불러와서 참조해야 하는 변수에는 이용하기 적절하지 않다.

<br/>

두번째 방법으로는  파라미터의 type 앞에 `required` 예약어를 사용하여, 해당 함수를 호출할 떄 꼭 필요한 파라미터의 값이 무엇인지 메소드를 사용하는 사람에게 알려주는 방법이다.

`required`를 이용하면 모르고 실행했을 때의 오류를 제거할 수 있다!
```dart
String sayHello({ 
    required String name, 
    required int age, 
    [String? country = 'Republic of Korea']}) {
    return "Hello, $name, you are $age from $country";
}

void main() {
    print(sayHello(
        age : 19, 
        name :'nico', 
        country: 'cuba'
    ));
}
```

또한 파라미터의 변수가 있을 수도, 없을 수도 있는 nullable 여부를 `?` 연산자를 통해 표시하여 사용할 수도 있다! 

<br/>
<hr/>

### 참고
- [Flutter를 위한 Dart](https://wikidocs.net/189088)
- [Dart 공식문서 한글번역판](https://dart-ko.dev/language/functions)