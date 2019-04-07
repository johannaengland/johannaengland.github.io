window.onload = function atStart() {
    let publications = document.getElementsByClassName("publications");
    console.log(publications);
    for(publication in publications) {
        let name = publication.innerHTML;
        publication.innerHTML = "";
        let link = document.createElement("a");
        link.innerHTML = name;
        link.href= "/publications/"+name;
        console.log(link);
        console.log(publication);
        //publication.appendChild(link);
    }
}
