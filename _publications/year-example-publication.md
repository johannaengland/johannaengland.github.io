---
layout: publications
title: "Title of the publication"
author: "Author1, Author2, Author3"
booktitle: "Book title"
pages: "On which pages is the publication?"
year: "Year"

abstract: "Short description of the publication."

---
<head><script src="../js/publications.js"></script></head>

## Folien und Download

<body>
<img id="currentSlide" src="images/pic1.jpg" width="256" height="172"> <br>
<progress id="slidecount" value="0" max="2"></progress><br>
<p>
    <button type="button" onclick="slideshow(-1)">previous</button>
    <button type="button" onclick="slideshow(1)">next</button>
</p>
<!-- to be added: pdf download, slides (ppt), bibtech //-->
<table> 
    <caption>Downloads</caption>
    <td><a href="downloads/publication.pdf" download><img id="pdfIcon" src="icons/pdf.jpg"></a></td>
    <td><a href="downloads/slides.pptx" download><img id="pptIcon" src="icons/ppt.jpg"></a></td>
    <td><a href=""><img id="bibtexIcon" src="icons/bibtex.jpg"></a></td>
</table>
</body>
