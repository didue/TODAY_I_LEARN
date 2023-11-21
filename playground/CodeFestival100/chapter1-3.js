/** 문제21 : set은 어떻게 만드나요
 * 다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오 
 * 1) var x = {1,2,3,4,5,6,7};
 * 2) var x = {};
 * 3) var x = new Set('javascript');
 * 4) var x = new Set(range(5));
 * 5) var x = new Set();
 */
//Answer
4, 5


/** 문제22 : 배수인지 확인하기
 * 변수i가 6의 배수인지 확인하는 방법은?
 */
//Answer
i % 6 == 0


/** 문제23 : OX문제
 * console.loig(10/3)의 출력 결과는 3 이다 
 */
X


/** 문제24 : 대문자로 바꿔주세요
 */
const name = prompt('이름: ');
console.log(name.toUpperCase());


/** 문제25 : 원의넓이를 구하세요
 * 
 */
let radius = parseInt(prompt("원의 반지름"));
console.log(Math.sqrt(radius) * 3.14);


/** 문제26 : 행성문제2
 * 태양계를 이루는 행성의 한글이름을 입력하면 영어 이름을 반환하는 프로그램을 만들기 
*/
let input = prompt("행성의 한글이름:");
let planets = [
    { "ko" : "수성" , "en" : "Mercury" },
    { "ko" : "금성" , "en" : "Venus" },
    { "ko" : "지구" , "en" : "Earth" },
    { "ko" : "화성" , "en" : "Mars" },
    { "ko" : "목성" , "en" : "Jupiter" },
    { "ko" : "토성" , "en" : "Saturn" },
    { "ko" : "천왕성", "en" : "Uranus" },
    { "ko" : "해왕성", "en" : "Neptune" },
];
let target = planets.find(({ko}) => ko == input);
console.log(target.en);


/** 문제27 : 객체만들기
 * 첫번째 입력에서 학생의 이름이 공백으로 구분되어 입력되고,
 * 두번째 입력에서 해당 학생의 수학점수가 공백으로 구분되어 입력된다.
 * 두개를 합쳐 학생의 이름이 key이고 value가 수학점수인 객체를 출력해주세요. 
 */
let students = prompt("학생이름 :").split(" ");
let mathPoints = prompt("수학점수 :").split(" ").map((val) => parseInt(val));

if(students.length != mathPoints.length) {
    console.error("입력된 학생의 수와 점수의 수가 같지 않음!");
    return false;
}

let grades = {};
students.map((el, idx) => {
    grades = {
        ...grades
        , [el] : mathPoints[idx]
    }
});
console.log(grades);


/** 문제28 : 2-gram
 * 2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법
 * 예를 들어 'javascript'에서 2-gram을 반복하면 아래의 결과가 나온다 
 *
 * -입력 : javascript
 * -출력 :
 * J a
 * a v
 * v a
 * a s
 * s c
 * c r
 * r i
 * i p
 * p t
 */
let words = prompt("단어입력").split("");
for(var i=1 ; i<words.length ; i++) {
    console.log(`${words[i-1]} ${words[i]}`);
}


/** 문제29 : 대문자만 지나가세요
 * 진는 영어학원 아르바이트를 하고 있습니다.
 * 반 아이들은 알파벳공부를 하는 학생들인데 오늘은 대문자쓰기 시험을 봤습니다.
 * 알파벳 하나만을 입력하고 그 문자가 대문자이면 YES, 아니면 No를 출력하는 프로그램을 만들어주세요
 */
let alphabet = prompt("알파벳을 입력하세요 ");

if(alphabet.length > 1) {
    console.error("한글자 알파벳만 입력해주세요!");
}

let ascii = alphabet.charCodeAt(0);
console.log((ascii < 65 || ascii > 90)? "NO" : "YES");


/** 문제30 : 문자열 속 문자 찾기
 * 문자 pineapple에는 apple이란 문자가 숨어 있습니다.
 * 원범이는 이렇듯 문자열 속에 숨어있는 문자를 찾아보려 합니다.
 * 첫번째 입력으로는 문자열, 두번째 입력으로는 찾을 문자를 받습니다.
 * 그 문자가 시작하는 index를 반환하는 프로그램을 만들어주세요.
 * 
 * -입력 :  pineapple is yummy
 *          apple
 */
//Answer
let sentense = prompt("문자열을 입력하세요");
let target = prompt("타겟 문자");

console.log(sentense.indexOf(target));

