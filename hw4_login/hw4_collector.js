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

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic cmF2aTooV2F0ZXIxKXM=");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    for(let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i)
        let item = localStorage.getItem(key)
        var urlencoded = new URLSearchParams();
        urlencoded.append("name", String(key));
        urlencoded.append("value", String(item));
        var requestOptions ={
            method: "POST",
            headers: myHeaders,
            body: urlencoded
        }
        
        fetch("https://cse135ravisteven.site/api/static". requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
    }

}

document.addEventListener("DOMContentLoaded", ready)

