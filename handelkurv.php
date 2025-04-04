<?php
session_start();

if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header('Location: index.html');
    exit;
}
require_once('/var/www/william_domain/mysql.php');

$navn = trim($_POST['produkt']);
$pris = trim($_POST['pris']);
$account_id = $_SESSION['id'];

$con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
if (mysqli_connect_errno()) {
    exit('Koblingen er ikke riktig: ' . mysqli_connect_error());
}

if ($stmt = $con->prepare('INSERT INTO bestillt (user_id, navn, pris) VALUES (?, ?, ?)')) {
    $stmt->bind_param('isi', $account_id, $navn, $pris);
    $stmt->execute();
    header('Location: meny.php');
    $stmt->close();
    echo "Kjøpet er registrert for produkt: " . htmlspecialchars($navn);
} else {
    echo "Noe gikk galt med forberedelsen av SQL-spørringen.";
}

$con->close();
?>