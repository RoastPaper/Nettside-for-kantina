<?php
require_once('/var/www/william_domain/mysql.php');

$username = trim($_POST['username']);
$password = trim($_POST['password']);
$email = trim($_POST['email']);

$day = intval($_POST['day']);
$month = intval($_POST['month']);
$year = intval($_POST['year']);
$date = sprintf("%04d-$02d-%02d", $year, $month, $day);

$con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
if (mysqli_connect_errno()) {
    exit('Det er noe feil med tilkoblingen til MySQl: ' . mysqli_connect_error());
}

if ($stmt = $con->prepare('SELECT id, password FROM Account WHERE username = ?')) {
    $stmt->bind_param('s', $username);
    $stmt->execute();
    $stmt->store_result();
    if ($stmt->num_rows > 0) {
        echo 'Brukernavnet finnes allerede';
    } else {
        $stmt = $con->prepare('INSERT INTO Account (username, password, email, date) VALUES (?, ?, ?, ?)');
        $stmt->bind_param('ssss', $username, $password, $email, $date);
        $stmt->execute();
        $stmt->close();
    }
}
$con->close();
echo 'Du har registert deg, du kan klikke denne linken for å logge deg inn! <a href="login.html">Klikk her</a>';
?>