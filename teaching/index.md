---
layout: default
title: Teaching

---
# Teaching

Here I want everything happening in the current semester. 
{% include_relative 2019-04-01 %}

{% for teaching in site.teaching %}
* <a href="{{ teaching.url }}">{{ teaching.title }}</a>: {{ teaching.courses }}
{% endfor %}
