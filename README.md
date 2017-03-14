## Website Performance Optimization portfolio project

##### Project Overview FEND Project 4 - Udacity

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).



### This repository is my submission for the above project

## Getting Started

#### Live Version

1. [a link](https://danteande.github.io/)
1. You can run dev tools to see the code and performnace metrics: For Chrome Dev tools on a Mac hit option-command-J

#### Local Version

1. Clone this repository
1. Run a local server with python SimpleHTTPServer, instructions here: https://docs.python.org/2/library/basehttpserver.html Warning: This requires some set-up if you are new to it.


#### Using Site

1. You should see the main page of the site if you followed the above instructions. That is index.html in the top-level directory. This page required improvements in page loading per the project.
1. Click on the 'Cam's Pizzeria' item in the list to see Part 2 of the project: optimizing the response time and animations on views/js/main.js
1. You can check out the other items on index.html as I have customized the portfolio to a certain extent showing other projects completed for the FEND course.


#### Changes

##### Index.html


1. Original PageSpeed scores were in the 30s/40s for deskyop/mobile but now are 92/92
1. I personalized the site as suggested by the instructors. This includes photos of me and additions of my other FEND projects. I left the 2048 game in as I will definitely take that course AND I thought shortening the list of items would be 'cheating' regarding the page load speed improvement task.
1. Inlined CSS that is css/sytle.css
1. Code changes for index.html included 'asyncing' scripts, and adding media ( media="print" )tags for scripts
1. Most changes were image optimizations using Photoshop.
1. Note the inlining of the one image, that seems to have lots of practical applications when you need to 'snag' a photo out in the wild - though it is a royal pain to have the data chunk in the middle of the code. Next time, it would be good to add a js file that holds those.

##### views/js/main.js

1. The slider was layout thrashing by running style in a loop after a (overly-complicated) calculation using a layout parameter.
1. The pizza animations basically had the same problem as the slider so I simplified that code to get the layout parameter outside of the loop to remove the thrashing, i.e. Forced Synchronous Layout.

##### views/css/style.css

1. Added transform and backface visibility parameters to improve performance to mover object



##### Selected Resources

1. Pagespeed: https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fdanteande.github.io%2F&tab=desktop
1. Math() function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
1. style.top property: https://www.w3schools.com/jsref/prop_style_top.asp
1. window innerHeight property: https://www.w3schools.com/jsref/prop_win_innerheight.asp
1. backface-visibility property: https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility
1. requestAnimationFrame method: https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
1. Adding requestAnimationFrame to scrolling: https://www.html5rocks.com/en/tutorials/speed/animations/
1. scroll event: https://www.w3schools.com/jsref/event_onscroll.asp
