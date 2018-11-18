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
var nummer = 1;
const numberOfSlides = 2;
function folien() {
    if (nummer !== numberOfSlides) {
        nummer = 2;
        return;
    } 
    else {
        nummer = 1;
    }
    source = "/pic"+nummer+".jpg";
    console.log(name);
    document.getElementById('currentSlide').src = source;
}
</script>
<img id="currentSlide" src="/pic1.jpg" width="256" height="172">

<p>
//add functionality with previous and next instead of just next
<button type="button" onclick="folien()">previous</button>
<button type="button" onclick="folien()">next</button>
</p>

</body>
