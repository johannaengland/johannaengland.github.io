---
layout: default
title: Projects

---
# Projects

{% assign projects = site.projects | reverse %}
{% for project in projects %}
* <a href="{{ project.url }}">{{ project.title }}</a>
{% endfor %}
