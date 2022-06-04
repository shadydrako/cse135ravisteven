<html>
 <head>
  <title> You have successfully logged out! </title>
 </head>
 <meta charset="utf-8">
 <?php  
echo '<script type="text/javascript">';
echo ' alert("You have successfully logged out!")'; 
echo '</script>';
?>
</head>
 <body>
 <?php echo '<p>You have successfully logged out!</p>'; 
 $link = 'https://cse135ravisteven.site';
 echo "Hi all welcome to the google page <a href=\"$link\">Google Page</a>";
 ?> 
 </body>
</html>

//Heres the code to log out on click  // HEYHEYHEY
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