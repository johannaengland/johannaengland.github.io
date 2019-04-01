---
layout: default
title: Johanna England

---
# Johanna England

Student assistant at [DIMA Group](http://www.dima.tu-berlin.de), [TU Berlin](http://www.tu-berlin.de)

## News

{% for news in site.news %}
  {{ news.content | split: '<!-- more -->' | first }}
{% endfor %}

## Publications 
{% assign publications = site.publications | reverse %}
{% for publication in publications limit:5 %}
* {{ publication.author }}: <a href="{{ publication.url }}">*{{ publication.title }}*</a>, in {{ publication.booktitle }}, {{ publication.year }}
{% endfor %}

## Projects
{% assign projects = site.projects | reverse %}
{% for project in projects limit:5 %}
* <a href="{{ project.url }}">{{ project.title }}</a>
{% endfor %}

## Teaching
{% assign teaching = site.teaching | reverse %}
{% for semester in teaching limit:5 %}
* <a href="{{ semester.url }}">{{ semester.title }}</a>: {{ semester.courses }}
{% endfor %}
