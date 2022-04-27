<?php
$env_array =getenv();
echo "<h3>Environment Variables</h3>";
foreach ($env_array as $key=>$value)
{
    echo "$key => $value <br />";
}
?>

<?PHP
$serv_array =getenv();
echo "<h3>Server Variables</h3>";
foreach ($_SERVER as $key=>$value)
{
    echo "$key => $value <br />";
}
?>