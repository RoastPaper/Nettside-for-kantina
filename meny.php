<?php
session_start();

if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header('Location: index.html');
    exit;
}
require_once('/var/www/william_domain/mysql.php');

$con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
if (mysqli_connect_errno()) {
    exit('Failed to connect to MySQL: ' . mysqli_connect_error());
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
        <menu>
            <div class="menu" id="menuid" onclick="tableFunction()">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
            <div class="title" id="titleid">
                <h1>Meny</h1>
            </div>
            <div id="dropsideId" class="dropdown">
                <img src="bilder/akademiet_oransje_rgb-1000x398.png" width="175px">
                <a href="index.php">Hjem</a>
                <a href="meny.php">Meny</a>
                <a href="varer.php">Varer</a>
            </div>
        </menu>
        <login class="login">
            <a href="login.html">Logout</a>
        </login>
    </header>
    <article class="table" id="table">
       <table>
        <tr>
            <th>Dag</th>
            <th>Måltid</th>
            <th>Beskrivelse</th>
            <th>Pris</th>
            <th>Bilder</th>
        </tr>
        <tr>
            <td>Mandag</td>
            <td>
                <h3>For frokost kan du velge fra disse alterativene:</h3> <br>
                <div id="måltid1"></div> <br>
                <div id="måltid1"></div> <br>
                <div id="måltid1"></div> <br>
                <h3>For lunsj kan du velge fra disse alterativene: </h3> <br>
                <div id="måltid"></div> <br>
                <div id="måltid"></div> <br>
                <div id="måltid"></div>
            </td>
            <td>
                <h3>Beskrivele for frokost:</h3> <br>
                <div id="beskrivelse1"></div> <br>
                <div id="beskrivelse1"></div> <br>
                <div id="beskrivelse1"></div> <br>
                <h3>Beskrivelse for lunsj:</h3> <br>
                <div id="beskrivelse"></div> <br>
                <div id="beskrivelse"></div> <br>
                <div id="beskrivelse"></div>
            </td>
            <td>
                <h3>Prisene for frokost:</h3> <br>
                <div id="koster1"></div> <br>
                <div id="koster1"></div> <br>
                <div id="koster1"></div> <br>
                <h3>Prisene for frokost:</h3> <br>
                <div id="koster"></div> <br>
                <div id="koster"></div> <br>
                <div id="koster"></div>
            </td>
            <td>
                <h3>Populærer bilder for frokost:</h3> <br>
                <div id="bilder1"></div> 
                <div id="bilder1"></div>
                <div id="bilder1"></div>
                <h3>Populærer bilder for lunsj:</h3> <br>
                <div id="bilder"></div> 
                <div id="bilder"></div>
                <div id="bilder"></div>
            </td>
        </tr>
        <tr>
            <td>Tirsdag</td>
            <td>
                <h3>For frokost kan du velge fra disse alterativene:</h3> <br>
                <div id="måltid1"></div> <br>
                <div id="måltid1"></div> <br>
                <div id="måltid1"></div> <br>
                <h3>For lunsj kan du velge fra disse alterativene: </h3> <br>
                <div id="måltid"></div> <br>
                <div id="måltid"></div> <br>
                <div id="måltid"></div>
            </td>
            <td>
                <h3>Beskrivele for frokost:</h3> <br>
                <div id="beskrivelse1"></div> <br>
                <div id="beskrivelse1"></div> <br>
                <div id="beskrivelse1"></div> <br>
                <h3>Beskrivelse for lunsj:</h3> <br>
                <div id="beskrivelse"></div> <br>
                <div id="beskrivelse"></div> <br>
                <div id="beskrivelse"></div>
            </td>
            <td>
                <h3>Prisene for frokost:</h3> <br>
                <div id="koster1"></div> <br>
                <div id="koster1"></div> <br>
                <div id="koster1"></div> <br>
                <h3>Prisene for frokost:</h3> <br>
                <div id="koster"></div> <br>
                <div id="koster"></div> <br>
                <div id="koster"></div>
            </td>
            <td>
                <h3>Populærer bilder for frokost:</h3> <br>
                <div id="bilder1"></div>
                <div id="bilder1"></div>
                <div id="bilder1"></div>
                <h3>Populærer bilder for lunsj:</h3> <br>
                <div id="bilder"></div>
                <div id="bilder"></div>
                <div id="bilder"></div>
            </td>
        </tr>
        <tr>
            <td>Onsdag</td>
            <td>
                <h3>For frokost kan du velge fra disse alterativene:</h3> <br>
                <div id="måltid1"></div> <br>
                <div id="måltid1"></div> <br>
                <div id="måltid1"></div> <br>
                <h3>For lunsj kan du velge fra disse alterativene: </h3> <br>
                <div id="måltid"></div> <br>
                <div id="måltid"></div> <br>
                <div id="måltid"></div>
            </td>
            <td>
                <h3>Beskrivele for frokost:</h3> <br>
                <div id="beskrivelse1"></div> <br>
                <div id="beskrivelse1"></div> <br>
                <div id="beskrivelse1"></div> <br>
                <h3>Beskrivelse for lunsj:</h3> <br>
                <div id="beskrivelse"></div> <br>
                <div id="beskrivelse"></div> <br>
                <div id="beskrivelse"></div>
            </td>
            <td>
                <h3>Prisene for frokost:</h3> <br>
                <div id="koster1"></div> <br>
                <div id="koster1"></div> <br>
                <div id="koster1"></div> <br>
                <h3>Prisene for lunsj:</h3> <br>
                <div id="koster"></div> <br>
                <div id="koster"></div> <br>
                <div id="koster"></div>
            </td>
            <td>
                <h3>Populærer bilder for frokost:</h3> <br>
                <div id="bilder1"></div>
                <div id="bilder1"></div>
                <div id="bilder1"></div>
                <h3>Populærer bilder for lunsj:</h3> <br>
                <div id="bilder"></div>
                <div id="bilder"></div>
                <div id="bilder"></div>
            </td>
        </tr>
        <tr>
            <td>Torsadag</td>
            <td>
                <h3>For frokost kan du velge fra disse alterativene:</h3> <br>
                <div id="måltid1"></div> <br>
                <div id="måltid1"></div> <br>
                <div id="måltid1"></div> <br>
                <h3>For lunsj kan du velge fra disse alterativene: </h3> <br>
                <div id="måltid"></div> <br>
                <div id="måltid"></div> <br>
                <div id="måltid"></div>
            </td>
            <td>
                <h3>Beskrivele for frokost:</h3> <br>
                <div id="beskrivelse1"></div> <br>
                <div id="beskrivelse1"></div> <br>
                <div id="beskrivelse1"></div> <br>
                <h3>Beskrivelse for lunsj:</h3> <br>
                <div id="beskrivelse"></div> <br>
                <div id="beskrivelse"></div> <br>
                <div id="beskrivelse"></div>
            </td>
            <td>
                <h3>Prisene for frokost:</h3> <br>
                <div id="koster1"></div> <br>
                <div id="koster1"></div> <br>
                <div id="koster1"></div> <br>
                <h3>Prisene for lunsj:</h3> <br>
                <div id="koster"></div> <br>
                <div id="koster"></div> <br>
                <div id="koster"></div>
            </td>
            <td>
                <h3>Populærer bilder for frokost:</h3> <br>
                <div id="bilder1"></div>
                <div id="bilder1"></div>
                <div id="bilder1"></div>
                <h3>Populærer bilder for lunsj:</h3> <br>
                <div id="bilder"></div>
                <div id="bilder"></div>
                <div id="bilder"></div>
            </td>
        </tr>
        <tr>
            <td>Fredag</td>
            <td>
                <h3>For frokost kan du velge fra disse alterativene:</h3> <br>
                <div id="måltid1"></div> <br>
                <div id="måltid1"></div> <br>
                <div id="måltid1"></div> <br>
                <h3>For lunsj kan du velge fra disse alterativene: </h3> <br>
                <div id="måltid"></div> <br>
                <div id="måltid"></div> <br>
                <div id="måltid"></div>
            </td>
            <td>
                <h3>Beskrivele for frokost:</h3> <br>
                <div id="beskrivelse1"></div> <br>
                <div id="beskrivelse1"></div> <br>
                <div id="beskrivelse1"></div> <br>
                <h3>Beskrivelse for lunsj:</h3> <br>
                <div id="beskrivelse"></div> <br>
                <div id="beskrivelse"></div> <br>
                <div id="beskrivelse"></div>
            </td>
            <td>
                <h3>Prisene for frokost:</h3> <br>
                <div id="koster1"></div> <br>
                <div id="koster1"></div> <br>
                <div id="koster1"></div> <br>
                <h3>Prisene for lunsj:</h3> <br>
                <div id="koster"></div> <br>
                <div id="koster"></div> <br>
                <div id="koster"></div>
            </td>
            <td>
                <h3>Populærer bilder for frokost:</h3> <br>
                <div id="bilder1"></div>
                <div id="bilder1"></div>
                <div id="bilder1"></div>
                <h3>Populærer bilder for lunsj:</h3> <br>
                <div id="bilder"></div>
                <div id="bilder"></div>
                <div id="bilder"></div>
            </td>
        </tr>
       </table>
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