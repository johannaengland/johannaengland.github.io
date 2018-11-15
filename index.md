---
layout: default
title: Johanna England
---
# Johanna England

Student assistant at [DIMA Group](http://www.dima.tu-berlin.de), [TU Berlin](http://www.tu-berlin.de)

## Publications 

{% for publication in site.publications limit:5 %}
* {{ publication.author }}: <a href="{{ publication.url }}">*{{ publication.title }}*</a>, in {{ publication.booktitle }}, {{ publication.year }}
{% endfor %}

## News

## Projects

## Teaching

This is a test 
<body>
<script>
function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "pic2.jpg"
    } else {
        pic = "pic1.jpg"
    }
    document.getElementById('myImage').src = pic;
}
</script>

<img id="myImage" src="pic1.jpg" width="256" height="172">

<p>
<button type="button" onclick="light(1)">Light On</button>
<button type="button" onclick="light(0)">Light Off</button>
</p>

</body>
