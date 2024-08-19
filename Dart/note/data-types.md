# Data Types

dart의 기본 자료형은 다음과 같다

### Dart 자료형의 종류
- string : `''` 또는 `""` 둘 다 사용 가능 
- bool 
- int 
- double 
- Object (class) : String, int, double과 같은 자료형도 타입정의가 class로 이루어진 객체 타입이다.
- List<T> : `collection if`, `collection for`를 지원
- Map


<hr/>

## List

### Collection-If 

`collection if`는 List를 만들 때 조건으로 있을수도 없을수도 있는 값을 추가할때 사용할 수 있다. 

코드로 예를 들자면, 기존의 클래식한 코드스타일 가이드에서 조건에 의해 List의 요소를 추가한다면 아래와 같은 방식으로 코드를 작성했을 것이다.
```dart
var isFive = true;
var numbers = [
    1,
    2,
    3,
    4,
];
if(isFive) {
    numbers.add(5);
}
print(numbers);
```
<br/>

하지만, dart의 `collection if`를 활용한다면 아래와 같이 작성할 수 있게 된다. 

```dart
var isFive = true;
var numbers = [
    1,
    2,
    3,
    4,
    if(isFive) 5,
];
print(numbers);
```


### Collection-For

`collection for`은 List의 내부에서 for문을 사용하여 다른 List 등을 참조하여 요소를 정의 할 수 있도록 하는 구문이다.

예를 들어, 클래식 코드 스타일가이드에서는 부모와 자식 두 개의 List를 병합하여 family라는 List를 만들 때 자식의 요소는 depth 만큼 들여쓰기를 해야한다면 아래와 같은 다소 고루한 방법으로 작성되었을 것 이다.
```dart
var parents = ['baeja', 'didue'];
var children = ['hana', 'yoona'];
var family;

for(var parent in parents) {
    family.add(parent);
}
for(var child in children) {
    family.add('  $child');
}
print(family);
```
<br/>

하지만, dart의 `collection for`를 활용한다면 아래와 같이 작성할 수 있게 된다. 

```dart
var parents = ['baeja', 'didue'];
var children = ['hana', 'yoona'];
var family = [
    for(var parent in parents) parent,
    for(var child in children) '  $child'
];
print(family);
```
<br/>

이 기능은 UI 인터페이스를 만들때, 메뉴 또는 네비게이션바 등에 유저의 로그인 여부에 따라 요소의 추가를 제어하는 데에 아주 유용하게 사용된다! 👍😎


<hr/>

## Map

`Map`은 javascript, typescript의 `Object(any)`와 같은 역할을 하는 타입이다.
`key-value` 구조로 사용하며, 자료형을 사용할 때 var 또는 Map<T, T>로 선언하여 사용할 수 있다.

```dart
Map<String, Object> data = {
    'name' : 'didue',
    'age' : 31,
};

//map의 property 함수
//entries(), keys(), values(), contains()
```

<hr/>

## Set 

Set은 모든 요소는 unique의 특징을 가지는 중복이 불가한 List이다.
dart의 `Set`의 선언도 var 또는 Set<T>로 사용할 수 있고 아주 간단하다.

한가지 차이점은 List는 요소를 대괄호`[]` 안에 넣어 관리했다면, `Set`은 중괄호`{}`에 요소를 넣어 사용한다.

```dart
Set<int> numbers = {1,2,3,4};
numbers.add(1);
numbers.add(1);
numbers.add(1);
print(numbers);         // {1,2,3,4}

List<int> numberlist = [1,2,3,4];
numberlist.add(1);
numberlist.add(1);
numberlist.add(1);
print(numberlist);         // [1,2,3,4,1,1,1]
```