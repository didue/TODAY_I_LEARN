/** 문제61: 문자열 압축하기
 * 문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.
 */
function compress(str) {
    let arr = str.split("");
    let result = [];
    arr.sort();

    for(let i=0 ; i<arr.length ; i++) {
        let item = arr[i]
        let lastIndex = str.lastIndexOf(item);
        
        result.push(item);
        result.push(lastIndex -i + 1);
        i = lastIndex
    }
    return result.join("");
}

let str = prompt("문자열 입력");
console.log(compress(str));



/** 문제62: 20190923 출력하기
 * [20190923]을 출력합니다. 단, 아래 기준을 만족하는 코드를 작성하시오.
 * 1. 코드 내에 숫자가 없어야 한다. (예: console.log(20190923) 불가)
 * 2. 파일 이름이나 경로를 사용해서는 안된다.
 * 3. 시간, 날짜 함수를 사용해서는 안된다. 
 * 4. 에러번호 출력을 이용해서는 안된다. 
 * 5. input을 이용해서는 안된다.
 */



/** 문제63: 친해지고 싶어
 * 한국 대학교의 김한국 교수님은 학생들과 친해지기 위해서 딸에게 줄임말을 배우기로 했습니다.
 * 딸은 '복잡한 세상 편하게 살자'라는 문장을 '복세편살'로 줄여 말합니다.
 * 교수님이 줄임말을 배우기 위해 아래와 같이 어떤 입력이 주어지면 앞 글자만 줄여 출력하도록 해주세요.
 * 입력은 한글 혹은 영어로 입력되며, 띄어쓰기를 기준으로 하여 짧은 형태로 출력합니다.
 * 
 * -입력 : 복잡한 세상 편하게 살자
 * -출력 : 복세편살
 */
function abbreviation(str) {
    let result = [];
    str.split(" ").map(x => result.push(x.at(0)));
    return result.join("");
}
let input = prompt("유행어로 만들어줘!").trim();
console.log(abbreviation(input));

//sol)
let arr = str.split(" ");
for(let s of arr){
    result.push(s.slice(0,1));
}



/** 문제64: 이상한 엘레베이터
 * 정량 N에 정확히 맞춰야만 움직이는 화물용 엘리베이터가 있습니다.
 * 화물은 7kg, 3kg 두 가지이며 팔이 아픈 은후는 가장 적게 화물을 옮기고 싶습니다.
 * 예를 들어 정량이 24kg이라면 3kg 8개를 옮기는 것보다는 7kg 3개, 3kg 1개 즉 4개로 더 적게 옮길 수 있습니다.
 * 
 * -입력 : N
 * -출력 : 가장 적게 옮길 수 있는 횟수(만약 어떻게 해도 정량이 N이 되지 않는다면 -1을 출력합니다.)
 */
let weight = parseInt(prompt("무게 N: "));
let leastCnt = 9999;

for(let i=weight/7 ; i >= 0 ; i--) {
    let x = weight/7;
    let y = (weight/7)/3;

    if((weight/7)%3 !== 0) break;

    if(leastCnt < x+y) break;

    leastCnt = x + y;
}