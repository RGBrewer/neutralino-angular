This is still kind of messy, sorry.

Structure
===========

the `neutralino` folder is the main project folder.
inside that folder is the `angular-app` folder, which contains the angular app.

Getting Started
===============
you'll need angular installed ..

`cd angular-app` and `npm i`

then `cd ..` to return to the `neutralino` folder.

You can run this angular app in a browser via the usual methods `cd angular-app && npm run start`, though you obviously won't have access to the neutralino api.

Building The App
================

To run the neutralino app, you'll need to build the angular app first.

Build the angular app -
`cd angular-app && npm run build && cd ..`

then either `neu run` or `neu build` as desired

IMPORTANT!
Inside the angular-app is /src/assets/neutralino This gets copied over to the /resources/ folder on build, where neutralino executes it. This must exist at all times in the resources folder. TLDR; Dont delete the resources folder. 

