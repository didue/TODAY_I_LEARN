
const $badge = document.getElementById('badge');
const $badge_box = document.getElementById('badge-box');

/** */
$badge.addEventListener('click', () => {
    let className = $badge_box.getAttribute('class') == 'open'? 'close' : 'open';
    $badge_box.setAttribute('class', className);
});