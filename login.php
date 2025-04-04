<?php
require_once('/var/www/william_domain/mysql.php');

$username = trim($_POST['username']);
$password = trim($_POST['password']);

$con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);

if ($stmt = $con->prepare(''))

?>