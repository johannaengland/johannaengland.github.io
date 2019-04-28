---
layout: default
title: Johanna England

---
# {{ site.title }}
<!---Write here everything you want visitors of the website to know (maybe include ways to contact you and your current position and workplace)-->
Student assistant at [DIMA Group](http://www.dima.tu-berlin.de), [TU Berlin](http://www.tu-berlin.de)

<!---Don't change anything in the following document-->
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
{% for project in projects %}
  {% if project.current == true %}
  * <a href="{{ project.url }}">{{ project.title }}</a>
  {% endif %}
{% endfor %}

## Teaching
{% assign teaching = site.teaching | reverse %}
{% for semester in teaching limit:5 %}
* <a href="{{ semester.url }}">{{ semester.title }}</a>: {{ semester.courses }}
{% endfor %}
