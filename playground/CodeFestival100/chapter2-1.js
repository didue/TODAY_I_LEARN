/** 문제51 : merge sort
 * ============== merge sort(병합정렬) ==============
 * 1. 리스트의 길이가 0 또는 1 이면 이미 정렬된 것으로 본다.
 * 2. 그렇지 않은 경우에는 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다. 
 * 3. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다. 
 * 4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다. 
 * [참고] https://images.velog.io/images/peanut_/post/37548189-961b-4912-b1c2-353ee306bbdd/image.png
 */
function mergeSort(arr){
  //1) 길이가 0 또는 1이면 정렬된 배열
  if(arr.length <= 1)  return arr;

  const mid = Math.floor(arr.length/2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let arr = [];
  while(left.length && right.length) {
    if(left[0] < right[0]){
      result.push(left.shift());
    }else {
      result.push(right.shift());
    }
  }
  
  while(left.length) {
    result.push(left.shift());
  }
  while(right.length) {
    result.push(right.shift());
  }

  return result;
}

const array1 = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
console.log(mergeSort(array1));



/** 문제52 : quick sort */
/** ============ quick sort란? ============
 * 배열 내 임의의 위치의 대상을 pivot이라고 기준으로 정한다.
 * 이 pivot을 기준으로 모든 수를 비교하여 기준보다 작으면 left, 크면 right로 정렬한다.
 * 이러한 과정을 한차례 진행 후 pivot을 기준으로 나뉜 영역에 대해 재귀적으로 반복한다.
 * 퀵 정렬은 n개의 데이터를 정렬할 때, 최악의 경우에는 O(n2)번의 비교를 수행하고, 평균적으로 O(n log n)번의 비교를 수행한다.
 */
function quickSort(arr) {
  if(arr.length <= 1) {
    return arr;
  }
  const pivot = arr[0];
  const left = [];
  const right = [];
  
  for(let i=1 ; i<arr.length ; i++) {
    if(pivot > arr[i]) {
      left.push(arr[i]);
    } else{
      right.push(arr[i]);
    }
  }
  return left;
}

const array2 = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
console.log(quickSort(array2));


/** 문제53 : 괄호 문자열
 * 괄호 문자열이란 괄호 기호인 {}, [], ()와 같은 것을 말한다.
 * 그중 괄호의 모양이 바르게 구성된 문자열을 바른 문자열, 그렇지 않은 문자열을 바르지않은 문자열이라고 부르도록 하자. 
 * (())와 같은 문자열을 바른 문자열이지만 ()())와 같은 문자열은 바르지 않은 문자열이다. 
 * 입력으로 주어진 괄호 문자열이 바른지 YES/NO로 판별하여 출력해보자.
 */
let figure = prompt("괄호 문자열을 입력하세요: ").split("");



/** 문제54 : 연속되는 수
 * 은주는 놀이공원 아르바이트를 하고 있다. 은주가 일하는 놀이공원에서는 현재 놀이공원 곳곳에 숨겨진 숫자 스탬프를 모아 오면 선물을 주는 이벤트를 하고 있다. 숫자 스탬프는 매일 그 수와 스탬프에 적힌 숫자가 바뀌지만 그 숫자는 항상 연속된다. 
 * 그런데 요즘 다른 날에 찍은 스탬프를 가지고 와 선물을 달라고 하는 손님이 늘었다.
 * 스탬프에 적힌 숫자가 공백으로 구분되어 주어지면 이 숫자가 연속수인지 아닌지 "YES"와 "NO"로 판별하는 프로그램을 작성하시오
 * 
 * -예1) 입력: 1 2 3 4 5 / 출력 : YES
 * -예2) 입력: 1 4 2 6 3 / 출력 : NO 
*/
function solution(arr) {
  let len = arr.length;
  let mid = arr[~~(len/2)];

  arr.sort((x,y)=> x-y);
  
  for(var i=0 ; i<len-1 ; i++){
    let sum = Math.ceil((arr[i] + arr[len-1-i])/2);
    if(sum !== mid) return false;
  }
  return true;
}


let stamps = prompt("놀이공원의 스탬프: ").split(" ").map(n => parseInt(n));
console.log(solution(stamps)? "YES" : "NO");



/** 문제55:하노이의 탑
 * 하노이의 탑은 프랑스 수학자 에두아르드가 처음으로 발표한 게임입니다. 하노이의 탑은 A, B, C 3개의 기둥과 기둥에 꽂을 수 있는 N 개의 원판으로 이루어져 있습니다. 이 게임에서는 다음의 규칙을 만족해야 합니다.
 *
 * 1. 처음에 모든 원판은 A 기둥에 꽂혀 있다.
 * 2. 모든 원판의 지름은 다르다.
 * 3. 이 원반은 세 개의 기둥 중 하나에 반드시 꽂혀야 한다.
 * 4. 작은 원반 위에 큰 원반을 놓을 수 없다.
 * 5. 한 번에 하나의 원판(가장 위에 있는 원판)만을 옮길 수 있다.
 * 
 * 이 규칙을 만족하며 A 기둥에 있는 원반 N 개를 모두 C 원반으로 옮기고 싶습니다.
 * 모든 원반을 옮기기 위해 실행되어야 할 최소 원반 이동 횟수를 계산하는 프로그램을 완성해 주세요.
 */

function hanoi(num, start, end, temp){
  const tower = [];
  console.log(tower);
  //원판이 한 개일 때에는 바로 옮기면 됩니다.
  if (num === 1) {
    tower.push([start, end]);
    return tower;
  }

  //원반이 n-1개를 경유기둥으로 옮기고
  hanoi(/*내용을 채워주세요.*/);
  //가장 큰 원반은 목표기둥으로
  tower.push(/*내용을 채워주세요.*/);
  //경유기둥과 시작기둥을 바꿉니다.
  hanoi(/*내용을 채워주세요.*/);

  return tower;
}

let tower = hanoi(3, 'A', 'B', 'C');
console.log(tower.length);





