<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "webpage";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
 
$query = "SELECT * FROM users where (user_email='".$_POST['email']."' AND password='".md5($_POST['password'])."');";
$result = mysqli_query($conn,$query);

if(mysqli_num_rows ($result)>0 ){
  while($row = $result->fetch_assoc()){
    echo 'Welcome ' .$row["user_name"];
  }
}
else {
    echo 'please enter correct data';
}

$conn->close();
?>
