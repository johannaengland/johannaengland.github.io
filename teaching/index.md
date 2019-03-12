---
layout: default
title: Teaching

---
# Teaching


Here I want everything happening in the current semester. 

{% for i in (1..5) %}
    {% if forloop.first == true %}
        {% continue %}
    {% else %}
        Not the first time.
    {% endif %}
{% endfor %}
