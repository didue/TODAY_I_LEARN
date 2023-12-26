/***
 * Chrome Extionsion의 시각적인 담당
 * - Html과 상호작용하고, background 스크립트와 함께 API 호출 
 * - popup.html = index.html 
 */

const $badge = document.getElementById('badge');
const $badge_box = document.getElementById('badge-box');


/** */
$badge.addEventListener('click', () => {
    let className = $badge_box.getAttribute('class') == 'open'? 'close' : 'open';
    $badge_box.setAttribute('class', className);
});