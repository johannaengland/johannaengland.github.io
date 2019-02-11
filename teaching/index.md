---
layout: default
title: Teaching
---
# Teaching

{% for teaching in site.teaching %}
* <a href="{{ teaching.url }}">:{{ teaching.title }},{{ teaching.courses }}
{% endfor %}
