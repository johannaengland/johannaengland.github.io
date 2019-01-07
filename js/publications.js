let currentSlide = 1;
const numberOfSlides = 3;

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
    document.getElementById('currentSlide').src = "images/pic"+currentSlide+".jpg";
}

function showBibtexText () {
    document.getElementById("bibtexText").classList.toggle("bibtexTextHidden");
}
