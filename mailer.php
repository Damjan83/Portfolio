<?php
require 'C:\xampp\htdocs\test\mailer\src\Exception.php';
require 'C:\xampp\htdocs\test\mailer\src\PHPMailer.php';
require 'C:\xampp\htdocs\test\mailer\src\SMTP.php';

$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
   
   $mail->setFrom('damjanpokrajac83@gmail.com', 'Darth Vader');
   $mail->addAddress('damjanpokrajac83@gmail.com', 'Emperor');
   $mail->Subject = 'Force';
   $mail->Body = 'There is a great disturbance in the Force.';
   
   /* SMTP parameters. */
   $mail->isSMTP();
   $mail->Host = 'smtp.gmail.com';
   $mail->SMTPAuth = TRUE;
   $mail->SMTPSecure = 'tls';
   $mail->Username = 'damjanpokrajac83@gmail.com';
   $mail->Password = 'mjanda89';
   $mail->Port = 587;
   
   /* Disable some SSL checks. */
   $mail->SMTPOptions = array(
      'ssl' => array(
      'verify_peer' => false,
      'verify_peer_name' => false,
      'allow_self_signed' => true
      )
   );
   
   /* Finally send the mail. */
   $mail->send();
}catch (Exception $e){
   echo $e->errorMessage();
}catch (\Exception $e){
   echo $e->getMessage();
}