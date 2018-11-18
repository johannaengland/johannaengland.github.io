---
layout: publications
title: "Title of the publication"
author: "Author1, Author2, Author3"
booktitle: "Book title"
pages: "On which pages is the publication?"
year: "Year"
numberOfSlides: 2

abstract: "Short description of the publication."

---
## Folien und Download

<body>
<script>
var number = 1;
const numberOfSlides = 3;
function folien(direction) {
    if (direction === -1) {
        if (number !== 1) {
            number = number - 1;
        } 
        else {
            number = numberOfSlides;
        }
    }
    else {
        if (number !== numberOfSlides) {
            number = number + 1;
        } 
        else {
            number = 1;
        }
    }
    document.getElementById('currentSlide').src = "/pic"+number+".jpg";;
}
</script>
<img id="currentSlide" src="/pic1.jpg" width="256" height="172">
<p>
<button type="button" onclick="folien(-1)">previous</button>
<button type="button" onclick="folien(1)">next</button>
</p>

</body>
