/** 문제31: 자바스크립트 자료형의 복잡도 
 * 배열의 내장함수의 시간복잡도가 O(1)이 아닌 것을 모두 고르시오.
 * 1) arr[i]
 * 2) arr.push(5)
 * 3) arr.slice()
 * 4) arr.pop()
 * 5) arr.includes(5)
 */
//Answer
3,5


/** 문제32. 문자열 만들기
 * 문자열을 입력받으면 단어의 갯수를 출력하는 프로그램을 작성하세요.
 */
const sentence = prompt("자기소개서");
console.log(`단어수 : ${sentence.split(" ").length}`);
console.log(`글자수 : ${sentence.length}`);


/** 문제33. 거꾸로 출력하기
 * 한줄에 여러개의 숫자가 입력되면 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.
 */
let input = prompt("input: ").split("");
let reverse = "";
//Answer
console.log(input.reverse().join(""));


/** 문제34 : sort구현하기
 * 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자.
 */


/** 문제35 : Factory 함수 사용하기 
 * 2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다.
 * <pass>에 코드를 작성하여 two함수를 완성하세요.
 * 
 * function one(n){
 *     function two(){
 *        <pass>
 *     }
 *     return two;
 * }
 * 
 * const a = one(2);
 * const b = one(3);
 * const c = one(4);
 * 
 * console.log(a(10));
 * console.log(b(10));
 * console.log(c(10));
 */
//Answer
return Math.pow(n, 2);


/** 문제36 : 구구단 출력하기
 * 1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 출력하는 프로그램을 작성하세요
 */
const number = parseInt(prompt("숫자"));
let multiplication = [];
for(var i=1 ; i<10 ; i++){
    multiplication[i-1] = number * i;
}
console.log(multiplication.join(" "));


/** 문제37 : 반장선거
 * 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 표 수를 출력하는 프로그램을 작성하세요.
 * 
 * - 입력 : 원범 원범 혜원 혜원 혜원 유진 유진 혜원
 * - 출력 : 혜원(이)가 총 4표로 반장이 되었습니다. 
 */
let votes = ['원범', '원범', '혜원', '혜원', '혜원', '유진', '유진', '혜원'];
let sorted = votes.sort();

let candidate = "";
let vote = 0;
for(let i=0 ; i<sorted.length ; i++) {
    
    let fstIdx = i;
    let lstIdx = sorted.lastIndexOf(sorted[i]);
    
    if(lstIdx - fstIdx > vote) {
        vote = lstIdx - fstIdx + 1;
        candidate = sorted[i];
        i = lstIdx + 1;
    }
}
console.log(`${candidate}(이)가 총 ${vote}표로 반장이 되었습니다.`);


/** 문제38 : 호준이의 아르바이트
 * 호준이가 일하는 학원은 매번 시험 ~3위까지의 학생에게 사탕을 준다.
 * 그런데 오늘 마침 사탕이 다 떨어져서 호준이가 채점을 하고 점수를 보내면, 아이들의 숫자만큼 사탕을 사러가기로 했다.
 * 
 * 1-3위 학생은 여러명일 수 있고, 1-3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다. 
 * 학생들의 점수를 공백으로 구분하여 입력을 받고, 사탕을 받을 학생의 수를 출력하세요.
 * -입력 : 97 86 75 66 55 97 85 97 97 95
 * -출력 : 6
 */




