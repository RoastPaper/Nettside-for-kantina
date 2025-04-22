<?php
session_start();

if (!isset($_SESSION['loggedin'])) {
	header('Location: index.html');
	exit;
}
require_once('/var/www/william_domain/mysql.php');
$con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);

$stmt = $con->prepare('SELECT navn, pris FROM bestillt WHERE user_id = ?');

$stmt->bind_param('i', $_SESSION['id']);
$stmt->execute();
$stmt->bind_result($navn, $pris); // $title skal også være i det, men fungerer grunn av ble ikke ferdig med quiz.php.
$stmt->fetch();
$stmt->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Betaling</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<header>
    <div id="main">
    </div>
    <menu>
        <div class="menu" id="menu" onclick="menuFunction()">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
    </div>
    <div class="title" id="title">
        <h1>Varer</h1>
            </div>
            <div id="dropdownID" class="dropdown">
                <img src="bilder/akademiet_oransje_rgb-1000x398.png" width="175px">
                <a href="index.php">Hjem</a>
                <a href="meny.php">Meny</a>
                <a href="varer.php">Varer</a>
                <a href="handelkurv.php">Handelkurv</a>
            </div>
        </menu>
        <login class="login">
            <a href="logout.php">Logout</a>
        </login>
    </header>
    <article class="article">
        <h1>Betaling</h1>
        <table>
        <tr>
          <td>Måltid:</td>
          <td><?=htmlspecialchars($navn, ENT_QUOTES)?></td>
        </tr>
        <tr>
          <td>Pris:</td>
          <td><?=htmlspecialchars($pris, ENT_QUOTES)?></td>
        </tr>
      </table>
      <br>
      <form action="kjøper.php" method="post">
        <buttom class="knapp">Kjøp</button>
    </form>
      <br>
      <br>
      <br>
    </article>
    <footer>
        <div>
            <h2>Kontakt oss:</h2>
            <p>Gmail: william.haaje@gmail.com</p>
            <p>Telefon: 41072972</p>
        </div>
        <div class="menynede">
            <h2>Lenkene til sidene:</h2>
            <a href="index.php">Hjemsiden</a>
            <a href="meny.php">Meny</a>
            <a href="varer.php">Varer</a>
        </div>
    </footer>
    <script src="funksjoner.js"></script>
</body>
</html>