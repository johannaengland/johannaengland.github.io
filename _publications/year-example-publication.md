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
     
    if (nummer =! numberOfSlides) {
        nummer = nummer + 1;
    } 
    else {
        nummer = 1;
    }
    
    document.getElementById('myImage').src = "/pic"+nummer+".jpg";
}
</script>
<img id="myImage" src="/pic1.jpg" width="256" height="172">

<p>
<button type="button" onclick="folien()">previous</button>
<button type="button" onclick="folien()">next</button>
</p>

</body>
