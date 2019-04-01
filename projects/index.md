---
layout: default
title: Projects

---
# Projects

{% assign projects = site.projects | reverse %}
{% for project in projects %}
* {{ project.title }}
{% endfor %}
