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
window.addEventListener("load", event => {
    let img = document.querySelector('img');
    imageLoads = img.complete && img.naturalHeight !== 0;
})

localStorage.setItem('user_enable_img', userEnableJS);


const data = {
    'user_agent_string' : userString,
    'user_language': userLanguage ,
    'user_cookie_enabled' : userCookieEnabled,
    'user_screen_dimension' : windowDimension ,
    'user_window_dimension': windowDimension2, 
    'user_js_enabled' : userEnableJS,
    'user_enable_img': userEnableJS
};
//fetch
fetch('https://cse135ravisteven.site/json/static', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data) 
    
})
    .then(res =>  res.json())
    .then(data => {  
        console.log('Success', data);
    })   
    .catch(error => console.log('ERROR'));


let timing = performance.getEntriesByType("navigation");
//The timing of the page load


//let pageLoad = PerformanceNavigationTiming.domContentLoadedEventEnd- window.PerformanceNavigationTiming;
//let pageLoad = timing[0].domContentLoadedEventEnd- timing[0].domContentLoadedEventStart;
setTimeout(function(){
    let pageLoad = timing[0].loadEventEnd - timing[0].responseEnd;
    localStorage.setItem('timing_page_load', pageLoad);
    //Specifically when the page started loading
    let pageStart = timing[0].domContentLoadedEventStart;
    localStorage.setItem('page_start_load_time', pageStart);
    //Specifically when the page ended loading
    let pageEnd = timing[0].loadEventEnd;
    localStorage.setItem('page_end_time', pageEnd);
    //The total load time (manually calculated - in milliseconds)
    let totalLoad = timing[0].duration; //returns timestamp in milliseconds
    localStorage.setItem('total_load_time',totalLoad); 
}, 5000);
//let pageLoad = timing[0].loadEventEnd - timing[0].responseEnd;
//localStorage.setItem('timing_page_load', pageLoad);
//The whole timing object

//Specifically when the page started loading
// let pageStart = timing[0].domContentLoadedEventStart;
// localStorage.setItem('page_start_load_time', pageStart);
// //Specifically when the page ended loading
// let pageEnd = timing[0].domContentLoaded;
// localStorage.setItem('page_end_time', pageEnd);
// //The total load time (manually calculated - in milliseconds)
// let totalLoad = timing[0].duration; //returns timestamp in milliseconds
// localStorage.setItem('total_load_time',totalLoad); 

//GO BACK TO FIX PERFORMANCE
//Activity (continuously collected)
//All mouse activity
//Cursor positions (coordinates) (CURRENTLY ONLY WORKS ON CLICK)
var xpos = -1; 
var ypos = -1;

function Position() {
    document.onmousemove = function(event) {
        xpos = event.pageX;
        ypos = event.pageY;
    }

	let position = "X: " + xpos + ", Y: " + ypos; 
	localStorage.setItem('Cursor_position', position);
}
setInterval(Position, 33);


// let xpos = MouseEvent.clientX;
// let ypos = MouseEvent.clientY;
// let cursor_position = "X-Coordinate:" + xpos + "Y-Coordinate:" + ypos;
// localStorage.setItem('Cursor_position', cursor_position);

//Clicks (and which mouse button it was)

//ONLY LEFT MOUSEBUTTON WORKS? (onclick apparently only deals with lmb?)
let clickType;
var button = document.body;
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



// let idleTime = 0;
// let idleFinal = 0;
// let idleTimer = setInterval(incrTimer,1000)
// let current = new Date();

var timeInactive = function () {
    let idleTime = 0;
    let idleTimer = setInterval(incrTimer,1000)
    let current = new Date();

    window.onload = clearTimer();
    document.onmousemove = clearTimer();
    document.onkeydown = clearTimer();
    

    if(idleTime >= 2000){
        current = current.toLocaleTimeString();  
    }


    if(idleTime >= 2000){
        current = current.toLocaleTimeString();  
    }

function incrTimer(){
    idleTime++; 
}

function clearTimer(){
    if(idleTime >= 2000){
        current = current.toLocaleTimeString();
    }
    localStorage.setItem('Break_Ended', current);
    localStorage.setItem('BreakTime', idleTime);
    clearTimeout(idleTime);
}
};


// Any idle time where no activity happened for a period of 2 or more seconds:
// Record when the break ended
//localStorage.setItem('Break_Ended', current);
// Record how long it lasted (in milliseconds)
//localStorage.setItem('BreakTime', idleFinal);  
// When the user entered the page

let userEnters = timing[0].loadEventEnd;
    localStorage.setItem('User_Enters_Page', userEnters);
// When the user left the page
let now = new Date();
document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === 'hidden') {
      now = now.toLocaleTimeString();
      localStorage.setItem('User_Left_Time', now);
    } 
  });
// Which page the user was on
// You should be able to tie this data to a specific user session






