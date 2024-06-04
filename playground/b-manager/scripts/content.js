const createBlogManagerBadge = (html) => {
    chrome.storage.sync.get('htmlString', ({htmlString}) => {
        let element = document.createElement('div');
        element.innerHTML = htmlString;
        document.body.appendChild(element);

        console.log(`load b-manager!`);
    });
}