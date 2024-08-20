# Typedef

`typedef` 키워드는 타입에 alias를 참조하게 만드는 방법이다.
복잡한 프로그램을 만들때 자료형을 명확히 하여 개발자로 하여 헷갈림을 방지하는데에 도움이 될 수 있기 때문에 꼭 알아보자!


코드 예제로 알아보자.

예를 들어 아래 코드와 같이 숫자 List를 역정렬하여 반환하는 reverseListOfNumbers라는 함수가 있다고 하자.

```dart
List<int> reverseListOfNumbers(List<int> list) {
  return list.reversed.toList();
}

void main() {
  List<int> list = [1,2,3,4,5];
  print(reverseListOfNumbers(list));
}
```
<br/>

이때 함수 사용을 위해 반복적으로 사용되는 `List<int>`라는 타입이 해당 함수를 위한 것임을 `typedef` 키워드를 통하여 명시적으로 선언할 수 있다.

```dart
typedef ListOfInts = List<int>;
```
<br/>


이렇게 하면 기존에 `List<int>`라고 작성되었던 타입은 `ListOfInts`라는 정의로 대체되고, 추후에 기능 고도화 등의 사유로 타입이 바뀌더라도 `typedef`만 수정하면 된다.

```dart
typedef ListOfInts = List<int>;

ListOfInts reverseListOfNumbers(ListOfInts list) {
  return list.reversed.toList();
}

void main() {
  ListOfInts list = [1,2,3,4,5];
  print(reverseListOfNumbers(list));
}
```
<br/>


`typedef`는 List 뿐만 아니라 Data Fetch에 제일 많이 사용되는 Map타입에서도 활용할 수 있다.

```dart
typedef UserInfo = Map<String, String>;

String sayHi(Map<String, String> userInfo) {
  return "Hi ${userInfo['name']}";
}
```

위 코드에서처럼 Map<String, String>으로 `key-value`형태를 만들어 사용해도 되지만, 좀 더 명시적으로 어떤 정보가 있는지 보이지 않기에 권장하지 않는다.


UserInfo처럼 받을 데이터의 값이 규정되어 있는 형태의 오브젝트라면 key를 세부화 하는 편이 좋다.
그러기 위해서는 `class`에 대해 다음 포스팅에 정리해보려 한다!


<br/>
<hr/>

### 참고

- [Dart 위키독스 - typedef](https://wikidocs.net/189085)
- [Dart Doc - PREFER inline function types over typedefs](https://dart.dev/effective-dart/design#prefer-inline-function-types-over-typedefs)
