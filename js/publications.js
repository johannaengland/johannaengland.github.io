let testSlideNumber = 1;
let numberOfTestSlides = -1;

window.onload = countSlides;

function countSlides() {
    testSlide = document.getElementById('testSlide');
    testSlide.style.display = "none";
    while(numberOfTestSlides == -1) {
        testSlideNumber++;
        testSlide.onerror=setNumberOfTestSlides;
        testSlide.src= "/slides/pic"+testSlideNumber+".jpg";
        function setNumberOfTestSlides() {
            numberOfTestSlides = testSlideNumber-1;
        }
    }
    testSlideNumber = 1;
    testSlide.src= "/slides/pic"+testSlideNumber+".jpg";
    testSlide.style.display = "initial";
}

function slideshow(direction) {
    testSlide = document.getElementById('testSlide');
    testSlideNumber += direction;
    testSlide.onerror=errorHandling;
    testSlide.src= "/slides/pic"+testSlideNumber+".jpg";

    function errorHandling() {
        if(direction == -1) {
            testSlideNumber = numberOfTestSlides;
            testSlide.src = "/slides/pic"+testSlideNumber+".jpg";
        }
        else if (direction == 1) {
            testSlideNumber = 1;
            testSlide.src = "/slides/pic"+testSlideNumber+".jpg";
        }
        numberOfTestSlides = testSlideNumber-1;
        testSlideNumber = 1;
        testSlide.src = "/slides/pic"+testSlideNumber+".jpg";
        console.log(numberOfTestSlides);
    }
}
    
function showBibtexText () {
    document.getElementById("bibtexText").classList.toggle("bibtexTextHidden");
}
