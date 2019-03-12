---
layout: default
title: Teaching

---
# Teaching


Here I want everything happening in the current semester. A

{% for teaching in site.teaching %}
  {% if forloop.first == true %}
    {% continue %}
* <a href="{{ teaching.url }}">*{{ teaching.title }}*</a>: {{ teaching.courses }}
{% endfor %}
