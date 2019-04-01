let slideNumber = 1;
let numberOfSlides = -1;
let url;
let nameOfSlides;
let fileEnding;
let source;
    
function slideshow(direction) {
    currentSlide = document.getElementById('currentSlide');
    slideNumber += direction;
    currentSlide.onerror=errorHandling;
    source = "/slides/"+url+"/"+nameOfSlides+slideNumber+fileEnding; 
    source = source.replace(/\s+/g, '');
    currentSlide.src= source

    function errorHandling() {
        if(direction == -1) {
            if(numberOfSlides == -1) {
                slideshow(1);
            }
            else slideNumber = numberOfSlides;
            source = "/slides/"+url+"/"+nameOfSlides+slideNumber+fileEnding; 
            source = source.replace(/\s+/g, '');
            currentSlide.src= source;        
        }
        else if (direction == 1) {
            if(numberOfSlides == -1) {
                numberOfSlides = slideNumber-1;
            }
            slideNumber = 1;
            source = "/slides/"+url+"/"+nameOfSlides+slideNumber+fileEnding; 
            source = source.replace(/\s+/g, '');
            currentSlide.src= source;        
        }
    }
}

function showBibtexText () {
    document.getElementById("bibtexText").classList.toggle("bibtexTextHidden");
}

window.onload = function atStart() {
    url = document.getElementById("url").innerHTML.substring(15);
    nameOfSlides = document.getElementById("nameOfSlides").innerHTML;
    fileEnding = document.getElementById("fileEnding").innerHTML;
    source = "/slides/"+url+"/"+nameOfSlides+slideNumber+fileEnding; 
    source = source.replace(/\s+/g, '');
    document.getElementById('currentSlide').src = source;
}
