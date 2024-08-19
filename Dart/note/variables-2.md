# Variables (2)

## Final Variables 

한 번 정의된 변수를 수정할 수 없게 만들기 위해 `final` 키워드를 사용하여 변수를 정의할 수 있다. 
```dart
void main() {
    final String name = 'dart';
    name = 'flutter';       //Warn: The final vairable can only be set once.
}
```

<br/>

## Late Variables

`late` 는 `final`이나 `var`앞에 붙여쓸 수 있는 수식어 이다.
`late` 수식어는 변수를 초기 데이터 선언없이 정의하도록 사용하는 키워드이다.

```dart
void main() {
    late final String name;
    // hit the api and save the values in late variable
}
```

`late` 키워드를 사용하면 변수를 먼저 만들고 데이터 정의를 나중에 할 때 사용하도록 하여,
개발자로 하여금 실수를 방지할 수 있다.
이는 flutter로 data를 fetching 할 때 유용하게 사용된다.👌

<br/>

## Constant Variables

dart는 `const` 키워드는 javascript와 typescript의 그것과는 다르다. 
되려 javascript와 typescript의 const는 dart의 `final` 키워드와 그 용도가 같다.

dart의 `const` 키워드는 compile-time constant를 만들어 준다.
즉, 컴파일을 하기 전에 값을 알고 있는 변수를 의미한다. API Fetch를 통해 받아오는 데이터는 실행전까지 알 수 없으므로 const가 될 수 없다.

쉽게 말해 앱스토어에 앱을 올리기전에 이미 알고 있는 변수의 값은 `const` 가, 사용자를 통해 입력 또는 API를 통해서 받아오는 변수의 값은 `final` 키워드를 사용한다.
