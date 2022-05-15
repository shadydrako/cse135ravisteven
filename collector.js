/*
Static (collected after the page has loaded)
user agent string (DONE)
the user's language
if the user accepts cookies
if the user allows JavaScript (you will have to manually figure this one out)
if the user allows images  (you will have to manually figure this one out)
if the user allows CSS (you will have to manually figure this one out)
User's screen dimensions
User's window dimensions
User's network connection type
*/

//w3schools
let userString = navigator.userAgent;

localStorage.setItem('user_agent_string',userString);

let userLanguage = navigator.userLanguage;

localStorage.setItem('user_language',userString);


// sending the user String a json data
//the user's agent
/*
//the user's language
        var userLanguage = navigator.userLanguage || navigator.language;
        document.write(
            "The User's preferred language is: "+ userlanguage);
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
*/