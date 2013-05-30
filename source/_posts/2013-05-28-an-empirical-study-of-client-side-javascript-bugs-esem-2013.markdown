---
layout: post
title: "An Empirical Study of Client-Side JavaScript Bugs (ESEM 2013)"
date: 2013-05-28 11:25
comments: true
categories: papers
---

Frolin Ocariza, Kartik Bajaj, Karthik Pattabiraman, and Ali Mesbah. **An empirical study of client-side JavaScript bugs**. In *Proceedings of the ACM/IEEE International Symposium on Empirical Software Engineering and Measurement (ESEM)*, 10 pages. IEEE Computer Society, 2013.

{% blockquote %} 
Abstract—Context: Client-side JavaScript is widely used in web applications to improve user-interactivity and minimize clientserver communications. Unfortunately, web applications are prone to JavaScript faults. While prior studies have demonstrated the prevalence of these faults, no attempts have been made to determine their root causes and consequences. Objective: The goal of our study is to understand the root causes and impacts of JavaScript faults and how the results can impact JavaScript programmers, testers and tool developers. Method: We perform an empirical study of 317 bug reports from 12 bug repositories. The bug reports are thoroughly examined to classify and extract information about the fault’s cause (the error) and consequence (the failure and impact). Result: The majority (65%) of JavaScript faults are DOM-related, meaning they are caused by faulty interactions of the JavaScript code with the Document Object Model (DOM). Further, 80% of the highest impact JavaScript faults are DOM-related. Finally, most JavaScript faults originate from programmer mistakes committed in the JavaScript code itself, as opposed to other web application components such as the server-side or HTML code. Conclusion: Given the prevalence of DOM-related faults, JavaScript programmers need development tools that can help them reason about the DOM. Also, testers should prioritize detection of DOM-related faults as most high impact faults belong to this category. Finally, developers can use the error patterns we found to design more powerful static analysis tools for JavaScript. 
{% endblockquote %}

