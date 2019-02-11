---
layout: default
title: Teaching

---
# Teaching

{% for teaching in site.teaching %}
* {{ teaching.author }}: <a href="{{ teaching.url }}">*{{ teaching.title }}*</a>, in {{ teaching.booktitle }}, {{ teaching.year }}
{% endfor %}
