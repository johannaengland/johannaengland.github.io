---
layout: default
title: Teaching

---
# Teaching
 
{% for teaching in site.teaching limit:1 %}
  {{ teaching.content }}
{% endfor %}

{% for teaching in site.teaching %}
* <a href="{{ teaching.url }}">{{ teaching.title }}</a>: {{ teaching.courses }}
{% endfor %}

{% assign sorted = site.teaching | reverse %}
{% for item in sorted %}
  * <a href="{{ item.url }}">{{ item.title }}</a>: {{ item.courses }}
{% endfor %}
