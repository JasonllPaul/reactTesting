The project runs with the next instructions:

Open the browser:

WINDOWS:
	•	Right click on desktop, add new shortcut
	•	Add the target as "[PATH_TO_CHROME]\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp
	•	Click OK.


MAC:
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security


LINUX:
google-chrome --disable-web-security
Finally install the next:
npm install primereact --save
npm install primeicons --save
npm i react-transition-group
