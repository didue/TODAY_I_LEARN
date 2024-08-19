# Variables (1)

## Keyword
변수를 만드는 방법은 두가지다,

첫째로 명시적으로 타입을 부여해서 변수를 선언하는 것 이다.
class에서 변수나 property를 선언할 때 주로 명시적 타입 선언을 활용한다.
```dart
String name = 'dart';
```

두번째는  `var` 키워드를 사용하여 변수를 정의한다.
dart에서는 `var` 키워드를 통하여 변수를 정의하면, 타입을 지정할 필요가 없이 타입 추론에 의해서 변수를 정의한다.
```dart
var name = 'dart';
```
관습적으로 함수나 메소드 내부에 지역변수를 선언할 때 `var`를 사용하는것을 권장한다.
하지만 주의할 점은 초기에 정의한 변수와 같은 타입으로만 업데이트가 가능하다.
```dart
var name = 'dart';
name = 1;           //error ocuured!
```
<br/>

## Dynamic Variables
`dynamic`은 여러가지 타입을 가질 수 있는 변수에 쓰는 키워드이다.
권장되는 키워드 사용방법은 아니나, 꼭 필요한 상황에서는 유용하게 사용가능하다.
```dart
dynamic name;       //dynamic type (var name; same syntax)

name = 'dart';
name = 12;
name = true;
```
dynamic은 메소드를 사용하기 전에 타입체크를 필수로 해줘야 한다.
```dart
if(name is String) {
    //code
}

if(name is int) {
    //code
}
```
<br/>

## Null Safety

null safety는 개발자가 null값을 참조할 수 없게 하는 기능이다.
개발자가 null을 참조하게 되면 런타임에러가 발생하기 때문에 이것을 잡는 것이 중요하다

dart의 변수는 기본적으로 `nullable` 하지 않다. 
그렇기 때문에 null safety가 없다면 아래와 같은 코드는 이와 같은 에러를 발생할 것이다.
```dart
bool isEmpty(String string) => string.length === 0;

main() {
    isEmpty(null);      //NoSuchMethodError Occured!
}
```
isEmpty 메소드의 argument로 제공된 null인자에는 `length`라는 속성이 없기 때문에 발생한 런타임 에러이다.


이런 상황을 보호하기 위하여 dart의 null safety는 어떤 변수가 `null`이 될 수 있음을 정확히 표시해야 한다.
```dart
void main() {
    String? name = 'dart';      // '?' operator를 추가하여 null이 될 수 있음을 표시
    name = null;

    name?.isNotEmpty;           // '?.' 옵셔널 체이닝 문법을 통해 런타임 에러 방지
}
```

<br/>
