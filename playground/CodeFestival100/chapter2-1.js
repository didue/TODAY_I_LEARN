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
  if(arr.length === 0 || arr.length === 1)  return arr;


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