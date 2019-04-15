let slideNumber = 1;
let numberOfSlides = -1;
let url;
let nameOfSlides;
let fileEnding;
let sourceSlides;
let bibtex;
let powerpoint;
let pdf;
    
function slideshow(direction) {
    currentSlide = document.getElementById('currentSlide');
    slideNumber += direction;
    currentSlide.onerror=errorHandling;
    sourceSlides = "/slides/"+url+"/"+nameOfSlides+slideNumber+fileEnding; 
    sourceSlides = sourceSlides.replace(/\s+/g, '');
    currentSlide.src= sourceSlides;

    function errorHandling() {
        if(direction == -1) {
            if(numberOfSlides == -1) {
                slideshow(1);
            }
            else slideNumber = numberOfSlides;
            sourceSlides = "/slides/"+url+"/"+nameOfSlides+slideNumber+fileEnding; 
            sourceSlides = sourceSlides.replace(/\s+/g, '');
            currentSlide.src= sourceSlides;        
        }
        else if (direction == 1) {
            if(numberOfSlides == -1) {
                numberOfSlides = slideNumber-1;
            }
            slideNumber = 1;
            sourceSlides = "/slides/"+url+"/"+nameOfSlides+slideNumber+fileEnding; 
            sourceSlides = sourceSlides.replace(/\s+/g, '');
            currentSlide.src= sourceSlides;        
        }
    }
}

/*function downloadSources() {
    pdf = document.getElementsByClassName()[0];
    powerpoint = document.getElementsByClassName()[1];
    bibtex = document.getElementsByClassName()[2];

    console.log(pdf);
    console.log(("/downloads/"+url+"/publication.pdf").replace(/\s+/g, ''));

    //pdf.href = ("/downloads/"+url+"/publication.pdf").replace(/\s+/g, '');
    //powerpoint.href = ("/downloads/"+url+"/slides.pptx").replace(/\s+/g, '');
    //bibtex.href = ("/downloads/"+url+"/bibtex.bib").replace(/\s+/g, '');
}*/

window.onload = function atStart() {
    url = document.getElementById("url").innerHTML.substring(15);
    nameOfSlides = document.getElementById("nameOfSlides").innerHTML;
    fileEnding = document.getElementById("fileEnding").innerHTML;
    sourceSlides = "/slides/"+url+"/"+nameOfSlides+slideNumber+fileEnding; 
    sourceSlides = sourceSlides.replace(/\s+/g, '');
    document.getElementById('currentSlide').src = sourceSlides;

    //downloadSources();
}
