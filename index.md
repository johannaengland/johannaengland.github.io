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

<iframe id="newsFile" src="news.md" onload="LoadFile();" style="display: none;"></iframe>
<ul id="news"></ul>

## Projects

## Teaching
