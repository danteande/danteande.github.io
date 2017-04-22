## Website Performance Optimization portfolio project

##### Project Overview FEND Project 5 - Udacity

Neighborhood Map project. Use google maps APIs, 3rd party data APIs and framework (knockout) to build a single-page map application. My map helps hockey players find the nearest rinks with Adult Hockey Leagues; no small task in the Bay Area. Marin residents can be 45 minutes away from the nearest location.



### This repository is my submission for the above project

## Getting Started

#### Live Version

1. https://danteande.github.io/
1. You can run dev tools to see the code and performance metrics: For Chrome Dev tools on a Mac hit option-command-J

#### Local Version

1. Clone this repository
1. Run a local server with python SimpleHTTPServer, instructions here: https://docs.python.org/2/library/basehttpserver.html
Warning: This requires some set-up if you are new to it.


#### Navigating Site

1. You should see the main page of the site if you followed the above instructions. That is index.html in the top-level directory.
1. Click on the first item in the list, that is Neighborhood Map. This runs index.html in the mapsproject folder.
1. You can check out the other items on index.html as I have customized the portfolio to a certain extent showing other projects completed for the FEND course.


#### Using the App

1. The map loads rinks in the Bay Area with adult hockey leagues.
1. Finding a close hockey rink with an adult ice hockey league is difficult particularly for people in Marin County.
1. The maps shows highways in black lines.
1. Clicking on a pin shows an information window for that rink including address, and website address and phone number where available.
1. Clicking on a rink in the list on the left zooms to that location and show its information.
1. The search bar at the top filters the rink list based on character string search; so if you type in 'oak', the rink in Oakland remains in the list while the others disappear.
1. You can reset the map to its original state showing the full Bay area by hitting the reset button.

#### Future upgrades

1. Get the delayed pin-drop working
1. Add user address and determine closest rink by automobile travel

#### Selected Resources

1. Thanks to Google and Foursquare for their respective data sets and APIs; specifically google maps api and Foursquare venues data.
1. Snazzy Maps: https://snazzymaps.com/style/78983/hockey
1. Udacity Project 5 sample repo: https://github.com/udacity/ud864/blob/master/Project_Code_3_WindowShoppingPart1.html
1. Utility Functions in KnockoutJS: http://www.knockmeout.net/2011/04/utility-functions-in-knockoutjs.html
1. Foursquare ajax parsing stackoverflow: http://stackoverflow.com/questions/11791651/how-do-i-receive-a-json-file-using-ajax-and-parse-it-using-javascript
1. Postman: https://www.getpostman.com/apps
1. ko filtering stackoverflow: http://stackoverflow.com/questions/28042344/filter-using-knockoutjs
1. tranparent overlay w3: https://www.w3schools.com/css/tryit.asp?filename=trycss_transparency
1. foreach specs: hhttps://www.w3schools.com/css/tryit.asp?filename=trycss_transparency
1. keyup, keydown explanation stackoverflow: https://www.w3schools.com/css/tryit.asp?filename=trycss_transparency
1. The usual suspects: ko documentation, google maps apis - using one of their custom pins, udacity forums and mentors
1. Linters: http://jsbeautifier.org/  for .html and js formatting and http://jshint.com/ for js syntax
1. use strict stackoverflow ( I choose to use it at the top of my file) http://stackoverflow.com/questions/19910134/jshint-use-strict-issue
