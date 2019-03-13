---
layout: default
title: Teaching

---
# Teaching

Here I want everything happening in the current semester. 


{% for teaching in site.teaching %}
* <a href="{{ teaching.url }}">{{ teaching.title }}</a>: {{ teaching.courses }}
{% endfor %}
