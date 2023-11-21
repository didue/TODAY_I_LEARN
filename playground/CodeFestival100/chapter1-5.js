/** 문제41. 소수판별 */
let n = parstInt(prompt("판별한 숫자 입력"));
for(var i = 2 ; i <= ~~n/2 ; i++) {
    if(n % i === 0){
        console.log("NO");
        break;
    }
}
console.log("YES");


/** 문제42 : 2020년
 * 2020년 1월1일은 수요일입니다. 2020년 a월 b일은 무슨 요일 일까요?
 * 두 수 a,b를 입력받아 2020년 a월 b일이 무슨요일인지 리턴하는 함수 solution을 완성하세요
 * [제한조건]
 * - 2020년은 윤년입니다.
 * - 2020년 a월 b일은 실제로 있는 날입니다.
 * (13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)
 */
let ab = prompt("몇월 몇일").split(" ").map(x => parseInt(x));

function solution(a, b){
    let month = [31,29,31,30,31,30,30,31,30,31,30,31];
    let day = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

    if(a<1 || a >12)    new Error("월(month) 입력 오류");
    if(b<1 || b > 31)   new Error("일(date) 입력 오류");

    let days = ((a-1)*month[a-2]) + (b-1);
    let idx = (3 + days%7)%7;
 
    console.log(`2020년 ${a}월 ${b}일 (${day[idx]})`);
}


/** 문제43 : 10진수를 2진수로 */
let num = parseInt(prompt("숫자입력"));
console.log(num.toString(2));


/** 문제44 : 각 자리수의 합
 * 사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 만들어주세요
 * 예를 들어 18234 => 1+8+2+3+4 = 18 입니다.
 */
let target = prompt("숫자입력").split("").map(x => parseInt(x));
console.log(target.reduce((a, b) => a + b));


/** 문제45: getTime() 함수 사용하기
 * Date객체의 메소드중 하나인 getTime()은 1970년 1월 1일 0시0분0초 이후로부터 
 * 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환한다.
 * 이를 이용하여 현재 연도(2019)를 출력
 */
console.log(1970 + ~~(new Date()/1000/3600/24/365));


/** 문제46: 각 자리수의 합2
 * 1부터 20까지의(20포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총합을 구하세요.
 * ex) 10부터 15까지의 모든 숫자를 일렬로 놓으면 101112131415이고 
 * 각 자리의 수의 합은 21이다.
 */
let input = prompt("a부터 b까지의 수의 합: ").split(" ").map(x => parseInt(x));
let from = input[0], to = input[1];

let result = 0;
for(var i=from ; i<=to ; i++){
    result += i.toString().split('').reduce((a,b) => parseInt(a) + parseInt(b));
}
console.log(result);


/** 문제47: set자료형의 응용
 * 바울랩에서는 3월 29일 제주대학교에서 '제주 빅데이터 사회혁신 해커톤' 행사를 주최하게 되었습니다. 
 * 이에 구글 설문지를 배포하였으나 제주대학생들이 중복해서 n개씩 설문지를 제출하였습니다. 
 * 중복된 데이터들을 삭제하여 실제 접수 명단이 몇 명인지 알고 싶습니다.
 * 아래 주어진 데이터들로부터 중복을 제거하여 실제 접수 인원을 출력해 주세요.
 */
const people = [
    {name : "이호준", phone : "01050442903"},
    {name : "이호상", phone : "01051442904"},
    {name : "이준호", phone : "01050342904"},
    {name : "이호준", phone : "01050442903"},
    {name : "이준" ,  phone : "01050412904"},
    {name : "이호" ,  phone : "01050443904"},
    {name : "이호준", phone : "01050442903"}
];

let set = new Set();
for(let key in people) {
    set.add(people[key]);
}
console.log(set.size);


/** 문제48 대소문자 바꿔서 출력하기
 * 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.
 */
let str = prompt("영문 문자열 입력").split("");
let arr = [];

for(let alpha of str) {
    let charCode = (alpha === alpha.toUpperCase())? 32 : -32;
    arr.push(String.fromCharCode(alpha.charCodeAt() + charCode));
    
}
console.log(arr.join(''));


/** 문제49: 최댓값 구하기
 * 순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.
 * [입출력]
 * -입력 : 10 9 8 7 6 5 4 3 2 1
 * -출력 : 10
 */
let nums = prompt("숫자 여러개 입력(공백구분)").split(" ").map((x) => parseInt(x));
console.log(nums.sort((x,y)=>y-x)[0]);


/**문제50: 버블정렬 구현하기
 * 버블정렬은 두 인접한 원소를 검사하여 정렬하는 방법을 말합니다. 
 * 시간 복잡도는 느리지만 코드가 단순하기 때문에 자주 사용됩니다.
 * 
 * https://img.scoop.it/omRChIeVtQY1Nodjul8eODl72eJkfbmt4t8yenImKBVvK0kTmF0xjctABnaLJIm9
 * 
 * 아래 코드의 빈 칸을 채워 버블 정렬을 완성해 봅시다.
 */
function bubble(arr) {
    let result = arr.slice(); 
  
    for (let i = 0; i < result.length - 1; i++) {
      for (let j=0 ; j< result.length - 1 ; j++) {
        if (result[j] > result[j + 1]) {
           //빈칸을 채워주세요.
           result.splice(j, 2, result[j+1], result[j]);
        }
      }
    }
    return result;
  }
  
const items = prompt('입력해주세요.').split(' ').map((n) => {
return parseInt(n, 10);
});

console.log(bubble(items));
