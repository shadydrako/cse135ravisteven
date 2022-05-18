/*
Static (collected after the page has loaded)
user agent string (DONE)
the user's language (DONE)
if the user accepts cookies (DONE)
if the user allows JavaScript (you will have to manually figure this one out)  (DONE?)
if the user allows images  (you will have to manually figure this one out) 
if the user allows CSS (you will have to manually figure this one out)
User's screen dimensions (DONE)
User's window dimensions (DONE)
User's network connection type (DONE) 

*/

//w3schools
let userString = navigator.userAgent;

localStorage.setItem('user_agent_string',userString);

// sending the user String a json data
//the user's agent

let userLanguage = navigator.userLanguage || navigator.language;;

localStorage.setItem('user_language', userLanguage);



let userCookieEnabled = navigator.cookieEnabled;
localStorage.setItem('user_cookie_enabled',userCookieEnabled );


let windowDimension = "w:" +  window.screen.width  +  ", h: " + window.screen.height;

let windowDimension2 = "w:" +  window.innerWidth  +  ", h: " +  window.innerHeight;

localStorage.setItem('user_screen_dimension', windowDimension);

localStorage.setItem('user_window_dimension', windowDimension2);


let userEnableJS = true;
localStorage.setItem('user_js_enabled', userEnableJS);

//check if the image loads

let imageLoads = false;

/* bugged on console
window.addEventListener("load", event => {
    let img = document.querySelector('img');
    imageLoads = img.complete && img.naturalHeight !== 0;
})
*/

localStorage.setItem('user_enable_img', userEnableJS);

//The timing of the page load
//let pageLoad = PerformanceNavigationTiming.domContentLoadedEventEnd- window.PerformanceNavigationTiming;
let pageLoad = window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart; 
localStorage.setItem('timing_page_load', pageLoad);
//The whole timing object

//Specifically when the page started loading
let pageStart = PerformanceNavigationTiming.domContentLoadedEventStart;
localStorage.setItem('page_start_load_time', pageStart);
//Specifically when the page ended loading
let pageEnd = PerformanceNavigationTiming.loadEventEnd;
localStorage.setItem('page_end_time', pageEnd);
//The total load time (manually calculated - in milliseconds)
let totalLoad = PerformanceEntry.duration; //returns timestamp in milliseconds
localStorage.setItem('total_load_time',totalLoad);

//GO BACK TO FIX PERFORMANCE
//Activity (continuously collected)
//All mouse activity
//Cursor positions (coordinates) (CURRENTLY ONLY WORKS ON CLICK)
var xpos = -1;
var ypos = -1;
document.onmousemove = function(event) {
	xpos = event.pageX;
	ypos = event.pageY;
}
setInterval(Position, 1000);
function Position() {
	let position = "X: " + xpos + ", Y: " + ypos;
	localStorage.setItem('Cursor_position', position)
}

// let xpos = MouseEvent.clientX;
// let ypos = MouseEvent.clientY;
// let cursor_position = "X-Coordinate:" + xpos + "Y-Coordinate:" + ypos;
// localStorage.setItem('Cursor_position', cursor_position);

//Clicks (and which mouse button it was)

//ONLY LEFT MOUSEBUTTON WORKS? (onclick apparently only deals with lmb?)
let clickType;
var button = document.body
window.addEventListener('click', (event) => {
        if (event.button == 0){
            clickType = "Left Button";
        }
        if (event.button == 1){
            clickType = "Wheel Button";
        }
        if(window.oncontextmenu) {
            clickType = "Right Button";
        }
        if (event.button == 3){
            clickType = "Back Button";
        }
        if (event.button == 4){
            clickType = "Forward Button";
        }
        localStorage.setItem('Click_Type', clickType)
  });
  //var button = document.body,
  count = 0;
button.onclick = function() {
  count += 1;
  localStorage.setItem('click_amount', count);
}

//Scrolling (coordinates of the scroll works when u refresh page)
let scrollCoord = document.body.getBoundingClientRect().top;
localStorage.setItem('Scolling_coordinate', scrollCoord);

//Key down or Key up events
// let key = document.body;
// document.addEventListener('keydown', keyPress);
// function keyPress(e) {
//   key.textContent += ` ${e.code}`;
//   localStorage.setItem('KeyPress', key.textContent);
// }

// var log;
// window.addEventListener("keydown", log);
// function log(event){ 
//   localStorage.setItem('KeyPress', log);
// }

document.addEventListener('keydown', keyPressed);
function keyPressed(e) {
    keyPressed = String.fromCharCode(e.keyCode);
    localStorage.setItem('keyPressed', keyPressed);
}
 







