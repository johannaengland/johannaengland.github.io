let testSlideNumber = 1;
let numberOfTestSlides = -1;
    
function slideshow(direction) {
    testSlide = document.getElementById('testSlide');
    testSlideNumber += direction;
    testSlide.onerror=errorHandling;
    testSlide.src= "/slides/pic"+testSlideNumber+".jpg";

    function errorHandling() {
        numberOfTestSlides = testSlideNumber-1;
        testSlideNumber = 1;
        testSlide.src = "/slides/pic"+testSlideNumber+".jpg";
        console.log(numberOfTestSlides);
    }
}
    
function showBibtexText () {
    document.getElementById("bibtexText").classList.toggle("bibtexTextHidden");
}
