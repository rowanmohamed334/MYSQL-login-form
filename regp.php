<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "webpage";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO users (user_name, user_email, password, confirmed_password) VALUES ('".$_POST["name"]."',
			'".$_POST["email"]."','".md5($_POST["password"])."','".md5($_POST["Confirmed_password"])."')";


if (mysqli_query($conn, $sql)) {
  echo "Welcome " .$_POST["name"];
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
