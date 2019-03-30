let testSlideNumber = 1;
let numberOfTestSlides = -1;
    
function slideshow(direction) {
    testSlide = document.getElementById('testSlide');
    testSlideNumber += direction;
    testSlide.onerror=errorHandling;
    testSlide.src= "/slides/pic"+testSlideNumber+".jpg";

    function errorHandling() {
        if(direction == -1) {
            if(numberOfTestSlides == -1) testSlideNumber = 1;
            else testSlideNumber = numberOfTestSlides;
            testSlide.src = "/slides/pic"+testSlideNumber+".jpg";
        }
        else if (direction == 1) {
            if(numberOfTestSlides == -1) numberOfTestSlides = testSlideNumber-1;
            testSlideNumber = 1;
            testSlide.src = "/slides/pic"+testSlideNumber+".jpg";
        }
    }
}
    
function showBibtexText () {
    document.getElementById("bibtexText").classList.toggle("bibtexTextHidden");
}
