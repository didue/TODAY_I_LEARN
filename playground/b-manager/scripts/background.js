(()=> {
    chrome.runtime.onInstalled.addListener(()=> {
        console.log('on installed b-mananger! ');
    });
    
    chrome.runtime.onMessage.addListener((r,c,t) => {
        
    });
    
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