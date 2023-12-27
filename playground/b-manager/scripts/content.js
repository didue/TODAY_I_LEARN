/**
 * 사용자가 방문하는 영역에서 작동하는 스크립트 (페이지의 현재 상태에 대한 정보 전달)
 * 현재 페이지의 DOM을 읽어와서 조작이 가능.
 * @author didue
 */
//Bagge Initializing 

/**
 * @description
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