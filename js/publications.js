let slideNumber = 1;
let numberOfSlides = -1;
let url;
let nameOfSlides;
    
function slideshow(direction) {
    currentSlide = document.getElementById('currentSlide');
    slideNumber += direction;
    currentSlide.onerror=errorHandling;
    currentSlide.src= "/slides/"+url+nameOfSlides+slideNumber+".JPG";

    function errorHandling() {
        if(direction == -1) {
            if(numberOfSlides == -1) {
                slideshow(1);
            }
            else slideNumber = numberOfSlides;
            currentSlide.src= "/slides/"+url+nameOfSlides+slideNumber+".JPG";        }
        else if (direction == 1) {
            if(numberOfSlides == -1) {
                numberOfSlides = slideNumber-1;
            }
            slideNumber = 1;
            currentSlide.src= "/slides/"+url+nameOfSlides+slideNumber+".JPG";        }
    }
}

function showBibtexText () {
    document.getElementById("bibtexText").classList.toggle("bibtexTextHidden");
}

window.onload = function atStart() {
    url = document.getElementById("url").innerHTML.substring(15);
    nameOfSlides = document.getElementById("nameOfSlides").innerHTML;
}
