let slideNumber = 1;
let numberOfSlides = -1;
let url;
let nameOfSlides;
let fileEnding;
let source;
    
function slideshow(direction) {
    currentSlide = document.getElementById('currentSlide');
    slideNumber += direction;
    currentSlide.onerror=errorHandling;
    source = "/slides/"+url+"/"+nameOfSlides+slideNumber+fileEnding; 
    source = source.replace(/\s+/g, '');
    currentSlide.src= source

    function errorHandling() {
        if(direction == -1) {
            if(numberOfSlides == -1) {
                slideshow(1);
            }
            else slideNumber = numberOfSlides;
            source = "/slides/"+url+"/"+nameOfSlides+slideNumber+fileEnding; 
            source = source.replace(/\s+/g, '');
            currentSlide.src= source;        
        }
        else if (direction == 1) {
            if(numberOfSlides == -1) {
                numberOfSlides = slideNumber-1;
            }
            slideNumber = 1;
            source = "/slides/"+url+"/"+nameOfSlides+slideNumber+fileEnding; 
            source = source.replace(/\s+/g, '');
            currentSlide.src= source;        
        }
    }
}

function downloadSources() {
    pdf = document.getElementsByClassName()[0];
    powerpoint = document.getElementsByClassName()[1];
    bibtex = document.getElementsByClassName()[2];
    console.log(pdf);
    console.log(("/downloads/"+url+"/publication.pdf").replace(/\s+/g, ''));
    //pdf.href = ("/downloads/"+url+"/publication.pdf").replace(/\s+/g, '');
    //powerpoint.href = ("/downloads/"+url+"/slides.pptx").replace(/\s+/g, '');
    //bibtex.href = ("/downloads/"+url+"/bibtex.bib").replace(/\s+/g, '');
}

window.onload = function atStart() {
    url = document.getElementById("url").innerHTML.substring(15);
    nameOfSlides = document.getElementById("nameOfSlides").innerHTML;
    fileEnding = document.getElementById("fileEnding").innerHTML;
    source = "/slides/"+url+"/"+nameOfSlides+slideNumber+fileEnding; 
    source = source.replace(/\s+/g, '');
    document.getElementById('currentSlide').src = source;

    downloadSources();
}
