---
layout: default
title: Teaching

---
# Teaching


Here I want everything happening in the current semester. 

{% for teaching in site.teaching %}
    {% if forloop.first == true %}
        {% continue %}
    {% else %}
        * <a href="{{ teaching.url }}">*{{ teaching.title }}*</a>: {{ teaching.courses }}
    {% endif %}
{% endfor %}
