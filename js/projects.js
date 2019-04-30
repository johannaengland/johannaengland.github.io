//This function takes the names of the Publications related to a project and creates links to the pages of these
window.onload = function addLinks() {
    let publications = document.getElementsByClassName("publications");
    for(let i=0;i<publications.length;i++) {
        let name = publications[i].innerHTML;
        publications[i].innerHTML = "";
        let link = document.createElement("a");
        link.innerHTML = name;
        link.href= "/publications/"+name;
        publications[i].appendChild(link);
    }
}
