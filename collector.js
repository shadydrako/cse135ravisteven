//w3schools
let userString = navigator.userAgent;

localStorage.setItem('user_agent_string',userString);

// sending the user String a json data
//the user's agent
let agent = navigator.userAgent;
//the user's language
<script> 
        var userLanguage = navigator.userLanguage || navigator.language;
        document.write(
            "The User's preferred language is: "+ userlanguage);
    </script> 
//if the user accepts cookies
if(navigator.cookieEnabled) {
    document.write("Cookies are enabled")
}
else {
    document.write("Cookies are disabled")
}
//if the user allows JavaScript (you will have to manually figure this one out)



//if the user allows images  (you will have to manually figure this one out)
//if the user allows CSS (you will have to manually figure this one out)

//User's screen dimensions (STILL HAVE TO PRINT)
var sheight = window.screen.height;
var sheight = window.screen.width;
//User's window dimensions ( STILL HAVE TO PRINT)
var width = window.innerWidth ||  document.body.clientWidth || document.documentElement.clientWidth;
var height = window.innerHeight||  document.body.clientHeight|| document.documentElement.clientHeight;
// OR window.innerWidth, window.innerHeight for WINDOW DIMENSION

//User's network connection type

//Performance (collected after the page has loaded)

//The timing of the page load
let pageLoad = PerformanceNavigationTiming.domContentLoadedEventEnd- window.PerformanceNavigationTiming.loadEventEnd;
localStorage.setItem('timing_page_load', pageLoad);
//The whole timing object

//Specifically when the page started loading
let pageStart = PerformanceNavigationTiming.domContentLoadedEventStart;
localStorage.setItem('page_start_load_time', pageStart);
//Specifically when the page ended loading
let pageEnd = PerformanceNavigationTiming.loadEventEnd;
localStorage.setItem('page_end_time');
//The total load time (manually calculated - in milliseconds)
let totalLoad = PerformanceEntry.duration; //returns timestamp in milliseconds
localStorage.setItem('total_load_time',totalLoad)
