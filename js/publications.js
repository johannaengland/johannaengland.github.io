let slideNumber = 1;
let numberOfSlides = -1;
let url;
let nameOfSlides;
let fileEnding;
let source;

/*This functions controls the slideshow (if you press the previous button the direction will be -1 and the next will be 1)
//If an error occurs (you want to show a picture, that doesn't exist), you either start at the first picture 
//(if you pressed next on the last slide or previous on the first slide and don't know yet how many slides there are,
//you will know after going through all of them by pressing next and then starting at the first again)
//or if you already know the number of slides and press previous on the first slide it will go to the first slide
//This is not optimal, but I didn't find a way to know the total number of slides before the user went through all of them
*/
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

//this function will add the download links from knowing the name of the publication file and then navigating inside of the downloads-folder
function downloadSources() {
    pdf = document.getElementsByClassName('downloads')[0];
    powerpoint = document.getElementsByClassName('downloads')[1];
    bibtex = document.getElementsByClassName('downloads')[2];
    pdf.href = ("/downloads/"+url+"/publication.pdf").replace(/\s+/g, '');
    powerpoint.href = ("/downloads/"+url+"/slides.pptx").replace(/\s+/g, '');
    bibtex.href = ("/downloads/"+url+"/bibtex.bib").replace(/\s+/g, '');
}

//This function prepares for the slideshow function
window.onload = function atStart() {
    url = document.getElementById("url").innerHTML.substring(15);
    nameOfSlides = document.getElementById("nameOfSlides").innerHTML;
    fileEnding = document.getElementById("fileEnding").innerHTML;
    source = "/slides/"+url+"/"+nameOfSlides+slideNumber+fileEnding; 
    source = source.replace(/\s+/g, '');
    document.getElementById('currentSlide').src = source;

    downloadSources();
}
