
## 비트 NOT연산자`(~)`

비트 NOT연산자 `(~)`는 피연산자의 `비트`를 반전시키는 연산자이며, 한글로 물결표라고 부르듯 `Tilde(~,틸드)` 연산자라고도 부릅니다.

피연산자는 32비트 정수로 변환되며 일련의 `비트(0과 1)`로 표현한다. 32비트를 넘어가는 숫자는 최상위 비트를 기준으로 삭제하며, 다른 비트 연산자와 마찬가지로 피연산자를 32비트 정수로 반환한다.


32비트 정수 피연산자는 `2의 보수`에 따라서 <b>반전</b>된다. 즉 최상위 비트는 `음수`를 표현하는데 사용한다.

```
 9 (base 10) = 0000 0000 0000 0000 0000 0000 0000 1001 (base 2)
               --------------------------------
~9 (base 10) = 1111 1111 1111 1111 1111 1111 1111 0110 (base 2) = -10 (base 10)

```

어떤 수 `x`에 대해 NOT 비트 연산을 하면 `-(x+1)`의 결과를 도출한다. 예를들면 ~-5의 결과는 4로 계산된다.



##  연산자 활용법
표현식 앞에 이를 사용하면 `indexOf()` 직접 반환되는 숫자 인덱스 대신 `참/거짓` 으로 반환한다.

```
//normal code
if(sentence.indexOf(words) >= 0) {
}
```

예를 들어 sentence에 wrods가 있을때 `indexOf()`의 예상 결과는 양의 정수 또는 때로는 0이다. 
이 예시를 `tilde(~)` 연산자를 사용하여 표현하면 아래와 같다. 

```
//using tilde operator
if(~sentence.indexOf(words)) {
}
```
indexOf() 함수의 존재값이 없을 경우 `-1`을 반환하는데 -1은 2진수로 `11111111`로 표현한다. 여기에 `tilde(~)`연산자를 써서 반전시키면 `00000000` 즉, `0`이 된다. `0`은 false로 취급되는 falsy value이기 때문에 `~-1 === 0`이라는 점을 이용해서 조건식을 간결하게 만들 수 있다.


이 외에도 자바스크립트에서는 `-1`을 반환하는 메소드들이 여럿 있다.

- `String.prototype.indexOf()`
- `String.prototype.charAt()`
- `String.prototype.search()`
- `Array.prototype.indexOf()`
- `Array.prototype.findIndex()`

위와 같은 메소드들은 주로 탐색 메소드로써 타겟의 인덱스를 반환하는데, 타겟이 존재하지 않을 경우 `-1`을 반환한다. 이 점을 이용하여 `tilde(~)`연산자를 적용하여 활용해볼 수 있겠다.😋


## ~~ (double tilde)
기본적으로 `tilde`연산자는 소수점 아래의 비트를 버리는 성질을 가진다.
```
console.log(~1.1);      //-2
console.log(~1);        //-2
```

`NOT연산`은 기본적으로 두번 사용하면 <b>"`부정+부정=긍정`"</b>은 국룰이므로 원본값을 가진다.
```
console.log(!true);     //false
console.log(!!true);    //true
```

논리부정연산인 `!`은 단순히 true와 false를 역전시키지만, 비트논리연산자인 `~`는 조금 다르다. 위의 예시와 같이 소수점을 버리는 성질이 있기 때문에 이 점을 이용하면 다음과 같이도 활용해볼 수 있다.

```
//1) ES6에서 추가된 Math.trunc를 바벨이나 Polyfill을 쓰지 않아도 된다.
console.log(Math.trunc(45.6)); // 45
console.log(~~45.6); // 45
console.log(Math.trunc(-45.6)); // -45
console.log(~~-45.6); // -45

//2) 비트단위 논리연산자이므로 메소드 호출보다 연산 속도가 훨씬 빠르다.
const iterations = 10000000;
console.time("Math.trunc()");
for(let i=0; i<iterations; i++){
    Math.trunc(-45.6); // Math.trunc: 124.700ms
}
console.timeEnd("Math.trunc()");
console.time("~~");
for(let i=0; i<iterations; i++){
    ~~-45.6; // ~~: 21.944ms
}
console.timeEnd("~~");

```
