---
layout: default
title: Teaching

---
# Teaching
 
## Current Semester
{% assign sorted = site.teaching | reverse %}
{% for semester in sorted limit:1 %}
  {{ semester.content }}
{% endfor %}

## Past Semesters
{% for semester in sorted %}
  * <a href="{{ semester.url }}">{{ semester.title }}</a>: {{ semester.courses }}
{% endfor %}
