<html>
 <head>
  <title> You have successfully logged out! </title>
 </head>
</html>


//Heres the code to log out on click

function logout(){
        var yesLogout=confirm("Do you want to logout?");
        if(yesLogout){
            location.href="path/to/logout/file.php";
        }
}
var element = document.getElementById("logout");
if (element.addEventListener) {
        element.addEventListener("click", logoutfunction, false);
    } else {
        element.attachEvent('onclick', logoutfunction);
}  