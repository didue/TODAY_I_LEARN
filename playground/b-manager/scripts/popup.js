//toggle switch element
const $toggleButton = document.getElementById('toggleSwitch');
//storage에 있는 스위치 initialize
chrome.storage.sync.get('toggle', ({ tf }) => {
    toggleSwitch.checked = tf;
});

//b매니저 토글 버튼 click event handler
const naverBlog = "https://blog.naver.com/";
$toggleButton.addEventListener('click', async () => {

    chrome.storage.sync.set({toggle : toggleSwitch.checked});

    let [tab] = await chrome.tabs.query({ active : true, currentWindow : true });
    chrome.scripting.executeScript({
        target : {tabId : tab.id},
        function : createBlogManagerBadge,
    });
});

/**
 * 웹 페이지에 b매니저 뱃지 버튼을 생성하는 함수
*/
const createBlogManagerBadge = (html) => {
    chrome.storage.sync.get('htmlString', ({htmlString}) => {
        let element = document.createElement('div');
        element.innerHTML = htmlString;
        document.body.appendChild(element);

        console.log(`load b-manager!`);
    });
}

//외부link호출 함수
const $linkButton = document.querySelectorAll('.txt-label span a');

[].forEach.call($linkButton, (btn)=>{
    btn.addEventListener('click', (e) => {

        let [tab] = chrome.tabs.query({ active : true, currentWindow : true });
        
        chrome.scripting.executeScript({
            target : {tabId : tab.id},
            function : openPopup,
        });
    });
});

/**
 * @description
 * a태그 외부 링크를 팝업 호출하는 함수
 */
function openPopup(e) {
    const url = e.target.id === "naver"? 
    "https://blog.naver.com/didiue" :
    "https://github.com/didue";
    
    window.open(url);
}
