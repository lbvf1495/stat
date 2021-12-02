<?php

$servername = "localhost";
$database = "stat";
$username = "root";
$password = "";
$conn = mysqli_connect($servername, $username, $password, $database);

$sql = "SELECT * FROM users";
$result = mysqli_query($conn,$sql);
// output data of each row
while($user = mysqli_fetch_array($result)) {
    echo $user[0]. " " .$user[1]. " " .$user[2]. " " .$user[3]. " " .$user[4]. " " .$user[0]. " <br>";
}
?>