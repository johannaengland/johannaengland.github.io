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
<iframe width="500" height="300" style="border:none;" src="https://johannaengland.github.io/news/index.md"></iframe>

## Projects

## Teaching
