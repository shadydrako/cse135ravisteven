<?php
$myObj = new stdClass();
$myObj->message = 'Hello World from PHP!';
$myObj->date = "Today's date is: ". date("Y-m-d");
$ip_add = $_SERVER['REMOTE_ADDR'];
$myObj->ipAddress = $ip_add;


$myJSON = json_encode($myObj);

echo $myJSON;
?>