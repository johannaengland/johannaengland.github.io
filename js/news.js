function LoadFile() {
    let frame = document.getElementById('newsFile');
    let y = (frame.contentWindow || frame.contentDocument);
    if (y.document) y = y.document;
    let content = y.body.childNodes[0].innerHTML;

    let newsArray = content.match(/\d{1,2}.\d{1,2}.\d{4}: .+/g);
    newsArray= newsArray.slice(0, 2);
    let newsDiv = document.getElementById("news");
    
    newsArray.forEach(addNewsToList);
    
    function addNewsToList (newsText) {
        let listElement = document.createElement("li");
        let text = document.createTextNode(newsText);
        listElement.appendChild(text);
        newsDiv.appendChild(listElement);
    }

}
