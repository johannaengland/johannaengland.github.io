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
function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "/pic2.jpg"
    } else {
        pic = "/pic1.jpg"
    }
    document.getElementById('myImage').src = pic;
}
</script>
<img id="myImage" src="/pic1.jpg" width="256" height="172">

<p>
<button type="button" onclick="light(1)">Light On</button>
<button type="button" onclick="light(0)">Light Off</button>
</p>

</body>
