# Classes

Dart는 `객체지향 프로그래밍(OOP)` 언어이다. 자바 공화국의 나라에서 대부분의 개발자들은 JAVA를 통해 이미 객체지향에 대해서 알고 있을지도 모른다.

객체지향에서 실제 현실세계를 대상을 반영한 `객체(Object)`를 메모리에 작성되어 `인스턴스(Instance)`가 된다. 

이 인스턴스화를 위해 설계도가 필요한데, 이 설계도가 바로 `클래스(Class)`이다. 클래스 안에는 해당 객체가 표현할 수 있는 속성을 가지는데 이를 `프로퍼티(Property)`라고 한다.

<br/>

## Constructors(생성자)

생성자는 인스턴스화 하는 방법을 제공하는 메소드이다. Dart는 기본 생성자를 제공하는데 기본 생성자는 클래스의 이름과 생성자의 이름을 동일하게 사용하여야 한다.

클래스와 생성자를 정의하는 방법은 아래 코드와 같다.

```dart
class User {
    late final String name;
    late int xp;

    User(String name, int xp) {
        this.name = name;
        this.xp = xp;
    }
}

void main() {
    var didue = User("didue", 100);
}
```

<br/>

이 때 생성자를 사용하여 인스턴스를 생성할 때는 `new` 키워드를 사용할 수 있지만, Dart에서는 생략도 가능하다.

더하여, 클래스 안에 작성된 속성 중 변수의 앞에 언더스코어(`_`)를 붙이면 외부에서 접근이 불가하다. 외부에서 접근하여 제어하지 못하도록 접근 지정자가 필요할 때 사용할 수 있다.

<br/>


```dart
class User {
    final String name;              //late키워드 삭제
    int xp;

    User(this.name, this.xp);       //argument setter
}

```

<br/>


클래스의 규모가 커질수록 생성자에 파라미터를 순서대로 작성하는 `positional parameter` 방식은 복잡함과 값을 읽기에 불편함을 초래하게 된다.

이를 해결하기 위해 앞서 변수에서 알아본 `named parameter` 방식을 사용하면 어떤 변수에 어떤 값이 들어갈 것인지 코드의 가독성을 추가할 수 있다.


```dart
class Player {
    final String name;
    int xp;
    int age;
    String guild;
    String job;
    ...
}

//positional parameter
var player1 = Player('nini', 3500, 20, 'blue', 'warrior');

//name parameter
var player2 = Player({
    name : 'nana', 
    xp : 3000, 
    age : 20, 
    guild : 'blue', 
    job: 'magician'
});

```

위의 코드를 보면 player1이 코드가 단순히 짧아서 가독성이 좋아보일 수 있으나, 객체가 더 커지거나 전체 코드가 더 커진다면 player2와 같이 쓰는 편이 개발자가 코드를 읽는데에 더 좋을 것이다!👍

<br/>

### Named Constructor

이제 본격적으로 Flutter에서 자주 사용하는 `Named Constructor`에 대해 알아보도록 하자

인스턴스를 생성할 때 특정한 속성으로 인스턴스의 값을 초기화 하는 생성자를 여러개 정의할 수 있는데 이를  `Named Constructor`라고 한다. Named Constructor는 `Object.identifier`를 구문을 사용하여 생성자에 이름을 붙여 기본 생성자와 구분하여 사용한다.

<br/>

코드 예제를 통해서 Named Constructor를 알아보자

```dart
class Player {
    final String name;
    int xp;
    int age;
    String guild;
    String job;
    ...


    //Name Constructor (named parameter way)
    Player.createMagician({                         
        required String name, 
        required int age 
    }) : this.name = name,
         this.age = age,
         this.xp = 0,
         this.job = 'magician';

    //Name Constructor (positional parameter way)
    Player.createWarrior(String name, int age)      
       : this.name = name,
         this.age = age,
         this.xp = 0,
         this.job = 'warrior';
}

void main() {
    var lunaMagic = Player.createMagician({
        name : 'luna', 
        age : 24
    });

    var tarakPower = Player.createWarrior('타락파워전사', 45);
}
```

<br/>

`Named Constructor`를 사용하는 이유는 3가지 정도로 추려볼 수 있겠다

1. 명확성, 가독성 : 생성자의 용도에 맞는 명확한 표현으로 사용할 수 있다.
2. 유연성 : 하나의 클래스에 여러 생성자를 정의함으로써 다양한 초기화 경로를 제공하여 여러 상황에 대한 유연성 제공한다.
3. 유지보수 : 역할에 따라 생성자를 만들기 때문에, 코드의 수정의 범위도 적어지고 유지보수가 용이해진다.
