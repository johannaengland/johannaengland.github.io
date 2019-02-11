---
layout: default
title: Teaching

---
# Teaching
{% include_relative /current-semester.md %}
Here I want everything happening in the current semester.

{% for teaching in site.teaching offset:1 %}
* <a href="{{ teaching.url }}">*{{ teaching.title }}*</a>: {{ teaching.courses }}
{% endfor %}
