---
layout: publications
title: Publications
---
# Publications

{% for publication in site.publications %}
* {{ publication.author }}: <a href="{{ publication.url }}">*{{ publication.title }}*</a>, in {{ publication.booktitle }}, {{ publication.year }}
{% endfor %}
