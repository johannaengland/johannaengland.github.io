let testSlideNumber = 1;
let numberOfTestSlides = -1;
    
function slideshow(direction) {
    testSlide = document.getElementById('testSlide');
    testSlideNumber += direction;
    testSlide.onerror=errorHandling;
    testSlide.src= "/slides/pic"+testSlideNumber+".jpg";

    function errorHandling() {
        if(direction == -1) {
            if(numberOfTestSlides == -1) {
                do {
                    slideshow(1);
                }
                while(numberOfTestSlides == -1);
            }
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

window.onload = function checkDownloads() {
    pdf = document.getElementById(pdf);
    pdt.href = "/downloads/publication.pdf";
    pdf.onerror = function deletePdfElement() {
        document.getElementById(tdpdf).removeChild(pdf);
    }
    pptx = document.getElementById(pptx)
    pptx.href = "/downloads/slides.pptx";
    pptx.onerror = function deletePptxElement() {
        document.getElementById(tdptx).removeChild(pptx);
    }
};
