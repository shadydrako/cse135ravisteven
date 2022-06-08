//Collecting static
//user agent string
//user's language
//does the user accept cookies
// does user allow javascript
//use allows images
// user's screen dimensions
// users' winodw dimensions
//user's network connection type

const { response } = require('express');
const mysql = require('mysql'); 
const db = mysql.createConnection({
    host: process.env.HOST,
    user:  process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  })

  //id, userstring, user lang, cookie_en, user sc width, user height, window width, window height, js en, network conn type


function ready(startTime){
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
        userString: userString,
        userLanguage: userLanguage,
        userCookieEnabled:  userCookieEnabled, 
        screenDimensionWidth: screenDimensionWidth, 
        screenDimensionHeight: screenDimensionHeight,
        windowDimensionWidth: windowDimensionWidth,
        windowDimensionHeight: windowDimensionHeight, 
        js_en: js_en,networkConnection: networkConnection
    }

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic cmF2aTooV2F0ZXIxKXM=");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    fetch('/api/data/static', {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data)

    }).then(response => response.json())
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log(error));
    // db.query('INSERT INTO static (user_string,user_lang, cookie_en, user_sc_width, use_sc_height, window_width, window_height, JS_en, network_connection) VALUES ?', items, (error, result)=>{
    //     console.log("Completed Insertion!");
    // })

}

var startTime = new Date().getTime();

window.onload = ready(startTime)

// document.addEventListener("DOMContentLoaded", ready)

