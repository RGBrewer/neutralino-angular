This is still kind of messy, sorry.

Inside the neutralino project there is an `angular-app` folder

TO BUILD:
cd angular-app
npm run build

this will build angular to the /resources/ directory in the neutralino project

then cd back to the neutralino folder, and `neu run`


IMPORTANT!
Inside the angular-app is /src/assets/neutralino -- THIS MUST EXIST. This gets copied over to the /resources/ folder on build, where neutralino executes it. Unfortunately, when you build angular, it deletes the entire /resources/ directory every time and recreates it, so you *CANNOT* have files in that directory which are not ultimately built by angular.
