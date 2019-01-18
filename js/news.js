function LoadFile() {
    let frame = document.getElementById('newsFile');
    let y = (frame.contentWindow || frame.contentDocument);
    if (y.document) y = y.document;
    
    let newsArray = Array.from(y.body.getElementsByClassName("container")[0].getElementsByTagName("li"));
    
    let newsDiv = document.getElementById("newsList");
    
    newsArray = newsArray.slice(0,2);
    newsArray.forEach(addNewsToList);
    
    function addNewsToList (newsElement) {
        newsDiv.appendChild(newsElement);
    }

}

