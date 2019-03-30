let testSlideNumber = 1;
let numberOfTestSlides = -1;
    
function slideshow(direction) {
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
