let slideNumber = 1;
let numberOfSlides = -1;
    
function slideshow(direction) {
    currentSlide = document.getElementById('currentSlide');
    slideNumber += direction;
    currentSlide.onerror=errorHandling;
    currentSlide.src= "/slides/pic"+slideNumber+".jpg";

    function errorHandling() {
        if(direction == -1) {
            if(numberOfSlides == -1) {
                slideshow(1);
            }
            else slideNumber = numberOfSlides;
            currentSlide.src = "/slides/pic"+slideNumber+".jpg";
        }
        else if (direction == 1) {
            if(numberOfSlides == -1) {
                numberOfSlides = slideNumber-1;
            }
            slideNumber = 1;
            currentSlide.src = "/slides/pic"+slideNumber+".jpg";
        }
    }
}

function showBibtexText () {
    document.getElementById("bibtexText").classList.toggle("bibtexTextHidden");
}

window.onload = function countSlides () {
    for(let i=0;i<4;i++) {
        console.log("currentSlideNumber: "+slideNumber+", numberOfSlides: "+numberOfSlides);
        slideshow(1);
        console.log("currentSlideNumber: "+slideNumber+", numberOfSlides: "+numberOfSlides);
    }
    console.log("currentSlideNumber: "+slideNumber+", numberOfSlides: "+numberOfSlides);
}
