<?php
session_start();

if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header('Location: index.html');
    exit;
}
?>
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nettside for kantina</title>
    <link rel="stylesheet" href="style.css"> <!-- Her har jeg koblet til CSS for at programet koble sammen med HTML -->
</head>
<body>
    <header>
        <div class="hero-image">
            <div id="main">
            </div>
            <img src="bilder/Toppen for nettsiden-2.png" width="1440" class=meny-bakgrunn> <!-- Her bruker jeg width for å gjør bildet mer mindre enn det var og lagde en class for å plassere det rikitg og ikke påvirke tekster innenfor hero-image -->
            <menu>
                <div class="menu" id="menu" onclick="menuFunction()">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
                <div class="title" id="title">
                    <h1>Hjemsiden</h1>
                </div>
                <div id="dropdownID" class="dropdown">
                    <img src="bilder/akademiet_oransje_rgb-1000x398.png" width="175px">
                    <a href="index.php">Hjem</a>
                    <a href="meny.php">Meny</a>
                    <a href="varer.php">Varer</a>
                    <a href="betal.php">Handelkurv</a>
                </div>
            </menu>
            <login class="login">
                <a href="logout.php">Logout</a>
            </login>
            <div class="hero-text">
                <h1>Akatina</h1>
                <p>Hei, og velkommen til Akademiets kantine</p>
            </div>
        </div>
        <img src="bilder/Toppen for nettsiden.png" width="1440" class="nederst-bakgrunn">
    </header>
    <br>
    <article class="article">
        <h2>Hvem er vi</h2>
        <p>Vi på Akademiet har oprrettet en kantine her på skolen. Du kan finner oss på tredje etasje til venstre. </p>
        <p>Her jobber både voksne og elever for å lage mat til ansatte og elevene her på skolen.</p>
        <h2>Vi tilbyr</h2>
        <p>Vi i Akademiets tilbyr ulike varmematretter fra mandag til fredag ok kan skaffe deg mat fra klokka 8:00 til 8:45 og 11:30 til 12:25</p>
        <p>Hver uke vil maten bli endret. Hvis du har lyst, kan du klikke her for se hva som kommer på menyen for denne uken.</p>
        <p>Du kan se vårt meny ved å klikke på knappen under her:</p>
        <div class="link">
            <a class="button" href="meny.html">Meny</a>
        </div>
        <p>Du vil også finne uliker varer vi selger tillegg og som vi selger vært dag. Du kan besøke siden ved å klikke på knappen under her:</p>
        <div class="link">
            <a class="button" href="varer.html">Varer</a>
        </div>
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

    <script src="funksjoner.js"></script> <!-- Her har jeg koblet til Javascript for at programet koble sammen med HTML -->
</body>
</html>