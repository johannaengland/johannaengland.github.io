let slideNumber = 1;
let NumberOfSlides = -1;
    
function slideshow(direction) {
    currentSlide = document.getElementById('currentSlide');
    slideNumber += direction;
    currentSlide.onerror=errorHandling;
    currentSlide.src= "/slides/pic"+currentSlideNumber+".jpg";

    function errorHandling() {
        if(direction == -1) {
            if(numberOfcurrentSlides == -1) {
                do {
                    slideshow(1);
                }
                while(numberOfSlides == -1);
            }
            else slideNumber = numberOfSlides;
            currentSlide.src = "/slides/pic"+slideNumber+".jpg";
        }
        else if (direction == 1) {
            if(numberOfSlides == -1) numberOfSlides = slideNumber-1;
            slideNumber = 1;
            currentSlide.src = "/slides/pic"+slideNumber+".jpg";
        }
    }
}
    
function showBibtexText () {
    document.getElementById("bibtexText").classList.toggle("bibtexTextHidden");
}
