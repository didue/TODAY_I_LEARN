/***
 * 사용자가 방문하는 영역에서 작동하는 스크립트 (페이지의 현재 상태에 대한 정보 전달)
 * 현재 페이지의 DOM을 읽어와서 조작이 가능.
 * @author didue
 */

/** b 매니저 뱃지생성 */
window.onload = function() {
    createBadge();
}
const createBadge = () => {
    let element = document.createElement('object');
    element.setAttribute('type', 'text/html');
    element.setAttribute('data', 'options.html');
    
    document.body.appendChild(element);
}




const $content = document.getElementsByClassName('se-content')[0];

//글자수 세기
const $textCnt = document.getElementById('text-cnt');
$content.addEventListener('keyup', () => {
    let textNodes = document.querySelectorAll('p.se-text-paragraph span');
    let textLength = 0;
    
    if(textNodes.length == 0) return false;

    textNodes.forEach((item, idx) => {
        textLength += item.innerHTML.length;
        console.log(textLength);
    });

    $textCnt.innerHTML = textLength;
});

//이미지수 세기
const $imgCnt = document.getElementById('img-cnt');
$content.addEventListener('change', () => {
    let imgNodes = document.querySelectorAll('div.se-section-image img');
    let imgLength = 0;
    
    if(imgNodes.length == 0) return false;

    imgNodes.forEach((item, idx) => {
        imgLength += item.innerHTML.length;
        console.log(imgLength);
    });

    $imgCnt.innerHTML = imgLength;
});




//글자수세기
