---
layout: layout.njk
title: Eventos
---

<h1>Eventos</h1>

<ul>
  {% for evento in collections.eventos %}
    <li>
      <a href="{{ evento.url }}">{{ evento.data.title }}</a>  
      <small>({{ evento.date | date: "%d/%m/%Y" }})</small>
    </li>
  {% endfor %}
</ul>
