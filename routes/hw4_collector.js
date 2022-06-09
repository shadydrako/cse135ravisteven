//Collecting static
//user agent string
//user's language
//does the user accept cookies
// does user allow javascript
//use allows images
// user's screen dimensions
// users' winodw dimensions
//user's network connection type

// const { response } = require('express');
// const mysql = require('mysql'); 
// const db = mysql.createConnection({
//     host: process.env.HOST,
//     user:  process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE
//   })

  //id, userstring, user lang, cookie_en, user sc width, user height, window width, window height, js en, network conn type
var myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic cmF2aTooV2F0ZXIxKXM=");
  myHeaders.append("Content-Type", "application/json");

function ready(){
    let userString = navigator.userAgent;
    localStorage.setItem('user_agent_string',userString);

    let userLanguage = navigator.userLanguage || navigator.language;
    localStorage.setItem('user_language', userLanguage);
    
    let userCookieEnabled = navigator.cookieEnabled;
    localStorage.setItem('user_cookie_enabled',userCookieEnabled );

    let screenDimensionWidth = window.screen.width;
    let screenDimensionHeight = window.screen.height;
    localStorage.setItem('user_screen_dimension_width', screenDimensionWidth);
    localStorage.setItem('user_screen_dimension_height', screenDimensionHeight);

    let windowDimensionWidth = window.innerWidth 
    let windowDimensionHeight = window.innerHeight
    localStorage.setItem('window_dimension_width', windowDimensionWidth);
    localStorage.setItem('window_dimension_height', windowDimensionHeight);

    let js_en = true;
    localStorage.setItem('JS Enabled', true);

    let networkConnection = navigator.connection.effectiveType;
    localStorage.setItem('network_connection_type', networkConnection);
    


    const data = {
        'userString': userString,
        'userLanguage': userLanguage,
        'userCookieEnabled':  userCookieEnabled, 
        'screenDimensionWidth': screenDimensionWidth, 
        'screenDimensionHeight': screenDimensionHeight,
        'windowDimensionWidth': windowDimensionWidth,
        'windowDimensionHeight': windowDimensionHeight, 
        'js_en': js_en,
        'networkConnection': networkConnection
    }

    fetch('/api/data/static', {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data)

    }).then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log(error));
}



let timing = performance.getEntriesByType("navigation");
localStorage.setItem('timing_object', performance.getEntriesByType("navigation"));
//The timing of the page load
// setTimeout(function(){
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
// }, 5000);

const data1 = {
    "timing_object" : timing,
    "timing_page_load" : pageLoad,
    "page_start_load_time" : pageStart,
    "page_end_time": pageEnd,
    "total_load_time": totalLoad
};

fetch('/api/data/performance', {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(data1)

}).then(response => response.json())
.then(result => console.log(result))
.catch(error => console.log(error));


window.onload = ready()

// document.addEventListener("DOMContentLoaded", ready)

