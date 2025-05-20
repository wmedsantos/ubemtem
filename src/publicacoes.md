---
layout: layout.njk
title: Blog
---

<h1>Blog</h1>

<ul>
  {% for post in collections.publicacoes %}
    <li>
      <a href="{{ post.url }}">{{ post.data.title }}</a>  
      <small>({{ post.date | date: "%d/%m/%Y" }})</small>
    </li>
  {% endfor %}
</ul>
