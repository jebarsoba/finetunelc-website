<?php
$name = $_POST['name1'];
$email = $_POST['email1'];
$message = $_POST['message1'];

$to = "paucmin@gmail.com";
$subject = "Fine Tune Website - Contacto";
$txt = $name . ", " . $email . ", " . $message;
$headers = "From: info@finetunelc.com.ar" . "\r\n" .
"CC: jebarsoba@gmail.com";

mail($to,$subject,$txt,$headers);
?>
