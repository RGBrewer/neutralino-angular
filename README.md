This is still kind of messy, sorry.

Structure
===========

the `neutralino` folder is the main project folder.
inside that folder is the `angular-app` folder, which contains the angular app.

Getting Started
===============
you'll need neutralino installed (https://neutralino.js.org/)

and then angular installed ..
`cd neutralino && npm i && cd angular-app && npm i && cd ..`

You can run this angular app in a browser via the usual methods `cd angular-app && npm run start`, though you obviously won't have access to the neutralino api.

Building The App
================

To run the neutralino app, you'll need to build the angular app first, so that an index.html gets built to the `resources` folder.

`cd angular-app && npm run build && cd ..`

then either `neu run` or `neu build` as desired

IMPORTANT!
Inside the angular-app is /src/assets/neutralino This gets copied over to the /resources/ folder on build, where neutralino executes it. This must exist at all times in the resources folder. TLDR; Dont delete the resources folder. 


Things to Know
==============
there is a main.js in `assets/neutralino/js/main.js` which sets up some default parameters and functionality.
it also places the main Neutralino api object onto the `window` object

I created a `NeutralinoService` which acts as the passthrough between the angular application and the Neutralino api living on the window object. 

There is an example usage in app.component.ts
