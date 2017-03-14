## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).



### This repository is my submission for the above project

####Instructions

1. You have downloaded/accessed the repository if you are reading this README.
1. Run index.html in the main directory to see Part 1 of the project, that is, optimizing the page load speed of index.html
1. Click on the Pizzeria project to see Part 2: optimizing the response time and animations on views/js/main.js
1. You can check out the other items on index.html as I have customized the portfolio to a certain extent.


####Changes

#####Index.html

1. I personalized the site as suggested by the instructors. This includes photos of me and additions of my other FEND projects. I left the 2048 game in as I will definitely take that course AND I thought shortening the list of items would be 'cheating' regarding the page load speed improvement task.
1. Code changes for index.html included 'asyncing' scripts, media tags for scripts but mostly image optimizations. See comments for details. Note the inlining of the one image, that seems to have lots of practical applications when you need to 'snag' a photo out in the wild - though it is a royal pain to have the data chunk in the middle of the code. Next time, it would be good to a js file that holds those.

#####views/js/main.js

1. The slider was layout thrashing by running style in a loop after a (overly-complicated) calculation using a layout parameter.
1. The pizza animations basically had the same problem as the slider so I simplified that code to get the layout parameter outside of the loop to remove the thrashing, i.e. Forced Synchronous Layout.

#####views/css/style.css

1. Added transform and backface visibility parameters to improve performance to mover object



#####Selected Resources

1. Pagespeed: https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fdanteande.github.io%2F&tab=desktop
1. Math() function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
1. style.top property: https://www.w3schools.com/jsref/prop_style_top.asp
1. window innerHeight property: https://www.w3schools.com/jsref/prop_win_innerheight.asp
