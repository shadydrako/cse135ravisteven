<html>
 <head>
  <title> Hello World - PHP!! </title>
 </head>
 <body>
 <?php echo '<p>Hello World</p>'; ?> 
 </body>
 <body>
     <?php echo '<p> This page was generated with the PHP programming language </p>'; ?>
</body>
<body>
<?php echo 'This program was run at: '. date("l") . date("h:i:sa") . date("Y-m-d"); ?>
     <?php $ip_add = $_SERVER['REMOTE_ADDR']; echo '<p> Your current IP address is: '. $ip_add;?>

</body>
</html>