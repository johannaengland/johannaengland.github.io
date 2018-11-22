---
layout: publications
title: "Title of the publication"
author: "Author1, Author2, Author3"
booktitle: "Book title"
pages: "On which pages is the publication?"
year: "Year"

abstract: "Short description of the publication."

---
## Folien und Download

<body>
<script>
var currentSlide = 1;
const numberOfSlides = 3;
    
/*function slidecount() {
    document.getElementById('slidecount').write("Folie ",currentSlide,"/",numberOfSlides);
}

slidecount();
*/

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
    //slidecount();
    document.getElementById('currentSlide').src = "/pic"+currentSlide+".jpg";
}
</script>
<img id="currentSlide" src="/pic1.jpg" width="256" height="172"> <br>
<meter id="slidecount" value="1" min="1" max="3" width="256"></meter><br>
<p>
    <button type="button" onclick="slideshow(-1)">previous</button>
    <button type="button" onclick="slideshow(1)">next</button>
</p>
<!-- to be added: pdf download, slides (ppt), bibtech //-->

</body>
