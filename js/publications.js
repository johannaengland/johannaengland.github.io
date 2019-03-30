let currentSlide = 1;
let testSlideNumber = 1;
let testSlideNumber = -1;
let numberOfSlides = 3;
    
function slideshow(direction) {
    if (direction === -1) {
        if (currentSlide !== 1) {
            currentSlide = currentSlide - 1;
        } 
        else {
            currentSlide = numberOfSlides;
        }
    }
    else {
        if (currentSlide !== numberOfSlides) {
            currentSlide = currentSlide + 1;
        } 
        else {
            currentSlide = 1;
        }
    }
        
    document.getElementById('slidecount').value = currentSlide -1;
    document.getElementById('slidecount').max = numberOfSlides -1;
    document.getElementById('currentSlide').src = "/slides/pic"+currentSlide+".jpg";

    testSlide = document.getElementById('testSlide');
    testSlideNumber += direction;
    tester.onerror=errorHandling;
    tester.src= "/slides/pic"+testSlideNumber+".jpg";

    function errorHandling() {
        numberOfTestSlides = testSlideNumber-1;
        testSlideNumber = 1;
        tester.src = "/slides/pic"+testSlideNumber+".jpg";
    }
}
    
function showBibtexText () {
    document.getElementById("bibtexText").classList.toggle("bibtexTextHidden");
}
