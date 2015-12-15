---
layout: page
title: "Publications"
comments: false
sharing: false
footer: false
sidebar: false
---

<div id="publications">

{% for myyear in (2007..2016) reversed %}
  <h3>{{myyear}}</h3>
  {% bibliography --query @*[year={{myyear}}] %}
{% endfor %}
  
</div>