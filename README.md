This is still kind of messy, sorry.

Structure
===========

the `neutralino` folder is the main project folder.
inside that folder is the `angular-app` folder, which contains the angular app.

Getting Started
===============

Before you can `neu run` you'll just need to build the angular app the first time, I left this repo as 'empty' as possible for a first-time-run.

Building The App
================
One liner - 
`cd angular-app && npm run build && cd .. && neu build`

this will build the angular app to the `/resources` folder, and then from that folder build the executables to the `/dist` folder. 

IMPORTANT!
Inside the angular-app is /src/assets/neutralino This gets copied over to the /resources/ folder on build, where neutralino executes it. This must exist at all times in the resources folder. TLDR; Dont delete the resources folder. 
