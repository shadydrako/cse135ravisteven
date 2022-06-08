//Collecting static
//user agent string
//user's language
//does the user accept cookies
// does user allow javascript
//use allows images
// user's screen dimensions
// users' winodw dimensions
//user's network connection type

function ready(){
    let userString = navigator.userAgent;
    localStorage.setItem('user_agent_string',userString);

    let userLanguage = navigator.userLanguage;
    localStorage.setItem('user_language', userLanguage);
    
    let userCookieEnabled = navigator.cookieEnabled;
    localStorage.setItem('user_cookie_enabled',userCookieEnabled );

    let screenDimensionWidth = "Screen Width: " + window.screen.width;
    let screenDimensionHeight = "Screen Height: " + window.screen.height;
    localStorage.setItem('user_screen_dimension_width', screenDimensionWidth);
    localStorage.setItem('user_screen_dimension_height', screenDimensionHeight);

    let windowDimensionWidth = "User WIndow Width: " + window.innerWidth 
    let windowDimensionHeight = "User WIndow Height: " + window.innerHeight
    localStorage.setItem('window_dimension_width', windowDimensionWidth);
    localStorage.setItem('window_dimension_height', windowDimensionHeight);

    localStorage.setItem('JS Enabled', true);

    let networkConnection = navigator.connection.effectiveType;
    localStorage.setItem('network_connection_type', networkConnection);

}

document.addEventListener("DOMContentLoaded", ready)

