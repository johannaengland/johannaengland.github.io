---
layout: default
title: Teaching

---
# Teaching

Here I want everything happening in the current semester. 

{% for semester in site.teaching %}
    * <a href="{{ semester.url }}">*{{ semester.title }}*</a>: {{ semester.courses }}
{% endfor %}
