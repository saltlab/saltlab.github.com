---
layout: post
title: "Best Full Paper Award at ESEM'15"
date: 2015-10-23 09:58:05 -0700
comments: false
categories: awards
---

Best Full Paper Award for the paper ["Don't Call Us, We'll Call Y ou: Characterizing Callbacks in JavaScript"](/publications/esem15.html), by Keheliya Gallaba, Ali Mesbah, and Ivan Beschastnikh, at the 9th ACM/IEEE International Symposium on Empirical Software Engineering and Measurement (ESEM 2015).

<img src="/images/esem15-award.jpg" title="Best Full Paper Award, ESEM 2015">

{% blockquote %} 
Abstract: JavaScript is a popular language for developing web applications and is increasingly used for both client-side and server-side application logic. The JavaScript runtime is inherently event-driven and callbacks are a key language feature. Unfortunately, callbacks induce a non-linear control flow and can be deferred to execute asynchronously, declared anonymously, and may be nested to arbitrary levels. All of these features make callbacks difficult to understand and maintain. We perform an empirical study to characterize JavaScript callback usage across a representative corpus of 138 JavaScript programs, with over 5 million lines of JavaScript code. We find that on average, every 10th function definition takes a callback argument, and that over 43% of all callback-accepting function callsites are anonymous. Furthermore, the majority of callbacks are nested, more than half of all callbacks are asynchronous, and asynchronous callbacks, on average, appear more frequently in client-side code (72%) than server-side (55%). We also study three well-known solutions designed to help with the complexities associated with callbacks, including the error-first callback convention, Async.js library, and Promises. Our results inform the design of future JavaScript analysis and code comprehension tools. 
{% endblockquote %}
  