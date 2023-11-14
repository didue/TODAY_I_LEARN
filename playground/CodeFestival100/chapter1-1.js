/** 문제1 : 배열의 삭제 
 * 다음 배열에서 400, 500을 삭제하는 코드를 입력하세요.
 * Q.
 * var nums = [100, 200, 300, 400, 500];
 */
//Answer
var result = nums.filter((num) => num < 400);
console.log(result);



/** 문제2 : 배열의 내장함수
 * <pass>부분에 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.
 * 
 * Q.
 * var arr = [200, 100, 300];
 * <pass>
 * console.log(arr);
 * //expected output : [200, 100, 10000, 300]
 */
//Answer
arr.splice(2, 0, 10000);
//=> Array.prototype.splice(start, deleteItem, item1, ....) 내장함수를 활용



/** 문제3 : 변수의 타입
 * 다음 출력 값으로 올바른 것은?
 * var arr = [100, 200, 300];
 * console.log(typeof(arr));
 * 
 * 1)undefined  2)string  3)number  4)object
 */

//Answer
(4)


/** 문제4: 변수의 타입2
 * 다음 변수 a를 typeof(a)로 넣었을때 출력될 갑과 연결이 맞지 않는 것은?
 * 1) input : a=1, output : number
 * 2) input : a=2.22, output : boolean
 * 3) input : a='p', output : string
 * 4) input : a=[1,2,3], output : object
 */

//Answer
(2)


/** 문제5 : for문 계산
 * 다음 코드의 출력은?
 * var a = 10;
 * var b = 2;
 * 
 * for(var i=1 ; i<5 ; i+=2) {
 *  a+=i;
 * }
 * console.log(a+b);
 */

//Answer
16


/** 문제6 : False
 * 다음 자바스크립트 문법 중에서 false로 취급하지 않는 하나는?
 * 1) NaN
 * 2) 1
 * 3) ""
 * 4) 0
 * 5) undefined
 */

//Answer
(2)


/** 문제7 : 변수명 
 * 다음 변수명으로 사용할 수 없는 2가지는?
 * 1) age
 * 2) &age
 * 3) let
 * 4) _age
 * 5) 1age
 */

//Answer
(2), (3)
// => 논리연산자가 포함되는 변수명X, let과 같은 예약어는 변수명X


/** 문제8 : 객체의 키 이름 중복
 * 자바스크립트 객체를 다음과 같이 만들었다. 출력값을 입력하시오.
 * 
 * var d = {
 *  'heigt' : 180,
 *  'weight' : 78,
 *  'weight' : 84,
 *  'temperature' : 36,
 *  'eyesight' : 1.0
 * };
 * console.log(d['weight']);
 */
//Answer
84


/** 문제9 : concat을 활용한 출력
 * 다음 소스코드를 완성하여 날짜와 시간을 출력하시오
 * 
 * var year = '2023';
 * var month = '04';
 * var day = '26';
 * var hour = '11';
 * var minute = '34';
 * var second = '27';
 * 
 * var result;
 * //answer
 * console.log(result);
 * //expected ouput : 2023/04/26 11:34:27
 */

//Answer
reslt = year.concat("/", month)
            .concat("/",day)
            .concat(" ", hour)
            .concat(":", minute)
            .concat(":", second);


/** 문제10 : 별 찍기 
 * 크리스마스날 은비는 친구들과 함께 파티를 하기로 했습니다. 그런데, 크리스마스 트리를 사는것을 깜빡하고 말았습니다.
 * 온 가게를 돌아다녀봤지만 트리는 모두 품절이었습니다,.
 * 하는 수없이 은비는 프로그래밍으로 트리를 만들기로 합니다.
 * 은비를 위해 프로그램을 작성해주세요.
 * 
 * 입력 : 5
 * 출력 : 
 *     *
 *    ***
 *   *****
 *  *******
 * *********
 */

//Answer
for(var i=0 ; i<5 ; i++){
  //white space
  for(var j=5-i ; j>0 ; j--) {
    document.write(".");
  }
  //asterisk(*)
  for(var k=0; k<(2*i+1); k++) {
    document.write("*");
  }
  //줄바꾸기
  document.write("<br>");
}