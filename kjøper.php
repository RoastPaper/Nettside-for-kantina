<?php
session_start();

if (!isset($_SESSION['loggedin'])) {
	header('Location: index.html');
	exit;
}
require_once('/var/www/william_domain/mysql.php');
$con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);

$stmt = $con->prepare('DELETE FROM bestillt WHERE user_id = ?')

?>