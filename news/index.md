---
layout: default
title: News

---
# News

{% for news in site.news %}
  {{ news.content }}
{% endfor %}
