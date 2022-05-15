/*
Static (collected after the page has loaded)
user agent string (DONE)
the user's language (DONE)
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

// sending the user String a json data
//the user's agent

let userLanguage = navigator.userLanguage || navigator.language;;

localStorage.setItem('user_language', userLanguage);



let userCookieEnabled = navigator.cookieEnabled;
localStorage.setItem('user_cookie_enabled',userCookieEnabled );
