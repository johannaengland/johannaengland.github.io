---
layout: default
title: Projects

---
# Projects

## Current Projects
{% assign projects = site.projects | reverse %}
{% for project in projects limit:5 %}
{% if project.current %}
* <a href="{{ project.url }}">{{ project.title }}</a>
{% endif %}
{% endfor %}

## Past Projects
{% assign projects = site.projects | reverse %}
{% for project in projects limit:5 %}
{% if project.current == false %}
* <a href="{{ project.url }}">{{ project.title }}</a>
{% endif %}
{% endfor %}
