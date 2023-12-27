(()=> {
    chrome.runtime.onInstalled.addListener(()=> {

        chrome.storage.sync.set({ 
            toggle : false,
            htmlString : html
        });

        chrome.scripting
            .registerContentScripts([{
            id: "session-script",
            js: ["content.js"],
            persistAcrossSessions: false,
            matches: ["*://blog.naver.com/*"],
            runAt: "document_end",
            }])
            .then(() => console.log("registration complete"))
            .catch((err) => console.warn("unexpected error", err));

        console.log('on installed b-mananger! ');
    });

    //
    chrome.runtime.onMessage.addListener((r,c,t) => {
        
    });

    //
    chrome.tabs.onUpdated.addListener((r,c,t) => {
        c.status === "complete" && /^http/.test(t.url) && (t.url.match(/https:\/\/blog.naver.com\/[a-zA-Z0-9]+\?Redirect=Write/) || t.url.match(/https:\/\/blog.editor.naver.com\/editor/) || t.url.match(/https:\/\/blog.naver.com\/[a-zA-Z0-9_+-]+\/postwrite/) || t.url.match(/https:\/\/blog.naver.com\/[a-zA-Z0-9_+-]+\?Redirect=Write/) || t.url.match(/https:\/\/blog.naver.com\/PostWriteForm.naver/)) && (chrome.scripting.insertCSS({
            target: {
                tabId: r
            },
            files: ["css/style.css"]
        }),
        chrome.scripting.executeScript({
            target: {
                tabId: r
            },
            files: ["scripts/content.js"]
        }).then(()=>{}
        ).catch(e=>console.error("\uC2A4\uD06C\uB9BD\uD2B8 \uC0BD\uC785 \uC624\uB958: ", e)))
    });
})();

const html = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<link href="css/style.css" rel="stylesheet">
<script src="scripts/options.js"></script>    
<body>
    <div class="container">
        <div id="badge">
            <span><i class="fa-solid fa-b fa-lg" style="color: #fff;"></i></span>
        </div>
        <div id="badge-box" class="close">
            <div class="badge-item">
                <span class="text-box">
                    <i class="fa-solid fa-keyboard fa-lg" style="color: #45474a;"></i>
                    <span id="text-cnt">0</span>
                </span>
            </div>
            <div class="badge-item">
                <span class="img-box">
                    <i class="fa-solid fa-image fa-lg" style="color: #45474a;"></i>
                    <span id="img-cnt">0</span>
                </span>
            </div>
            <div class="badge-item">
                <span class="map-box">
                    <i class="fa-solid fa-map-location-dot fa-lg" style="color: #45474a;"></i>
                    <span id="map-cnt">0</span>
                </span>
            </div>
            <div class="badge-item">
                <span class="keyword-box" title="필수키워드 체크기능">
                    <i class="fa-brands fa-searchengin fa-lg" style="color: #45474a;"></i>
                    <span id="map-cnt">키워드</span>
                </span>
            </div>
        </div>
    </div>
</body>
`;