
const $badge = document.getElementById('badge');
const $badge_box = document.getElementById('badge-box');

/** */
$badge.addEventListener('click', () => {
    let className = $badge_box.getAttribute('class') == 'open'? 'close' : 'open';
    $badge_box.setAttribute('class', className);
});



const $content = document.getElementsByClassName('se-text-paragraph')[0];

//글자수 세기 예제
const $textCnt = document.getElementById('text-cnt');
$content.addEventListener('keyup', () => {
    let textNodes = document.querySelectorAll('.se-text-paragraph');
    let textLength = 0;
    
    if(textNodes.length == 0) return false;

    textNodes.forEach((item, idx) => {
        textLength += item.value.length;
        console.log(textLength);
    });

    $textCnt.innerHTML = textLength;
});
