window.onload = function() {
    let publications = document.getElementsByClassName("publications");
    for(publication in publications) {
        let name = publication.innerHTML;
        publication.innerHTML = "";
        let link = document.createElement("a");
        link.innerHTML = name;
        link.href= "/publications/"+name;
        publication.appendChild(link);
    }
}
