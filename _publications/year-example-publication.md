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
var number = 1;
    
var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
        if (xmlhttp.status == 200) {
            var numberOfSlides = (xmlhttp.responseText.match(/jpg/g) || []).length;
        }
    }
};

xmlhttp.open("GET", "", true);
xmlhttp.send();

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
    document.getElementById('currentSlide').src = "/pic"+number+".jpg";
}
</script>
<img id="currentSlide" src="/pic1.jpg" width="256" height="172">
<p>
<button type="button" onclick="folien(-1)">previous</button>
<button type="button" onclick="folien(1)">next</button>
</p>

</body>
