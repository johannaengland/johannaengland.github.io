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

{% for news in site.news %}
  {{ news.content | split: '<!-- more -->' | first }}
{% endfor %}

## Projects

## Teaching

{% for teaching in site.teaching limit:5 %}
* <a href="{{ teaching.url }}">{{ teaching.title }}</a>: {{ teaching.courses }}
{% endfor %}
