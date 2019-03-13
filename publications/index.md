---
layout: default
title: Publications

---
# Publications

{% assign publications = site.publications | reverse %}
{% for publication in publications %}
* {{ publication.author }}: <a href="{{ publication.url }}">*{{ publication.title }}*</a>, in {{ publication.booktitle }}, {{ publication.year }}
{% endfor %}
