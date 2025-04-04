<?php
require_once('/var/www/william_domain/mysql.php');

$username = trim($_POST['username']);
$password = trim($_POST['password']);

$con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
if (mysqli_connect_errno()) {
    exit('Koblingen er ikke riktig: ' . mysqli_connect_error());
 }

if ($stmt = $con->prepare('SELECT id, password FROM Account WHERE username = ?')) {
    $stmt->bind_param('s', $username);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($id, $hashedPassword);
        $stmt->fetch();

        if (password_verify($password, $hashedPassword)) {
            session_regenerate_id();
            $_SESSION['loggedin'] = TRUE;
            $_SESSION['name'] = $username;
            $_SESSION['id'] = $id;

            header('Location: index.php');
        } else {
            echo 'Feil Passord';
        }
    } else {
        echo 'Feil brukernavn';
    }
    $stmt->close();
} else {
    echo "Noe feil her";
}

$con->close();
?>