<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '/home/damjanpo/public_html/mailer/src/Exception.php';
require '/home/damjanpo/public_html/mailer/src/PHPMailer.php';
require '/home/damjanpo/public_html/mailer/src/SMTP.php';

$mail = new PHPMailer();

try {
    $name = strip_tags(trim($_POST["fname"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = $_POST["email"];
    $message = $_POST["message"];
        
    $mail->setFrom($email, $name);
    $mail->addAddress('damjanpokrajac83@gmail.com', 'Emperor');
    $mail->Subject = 'My website email';
    $mail->Body = "Poruka:\n$message\n";
    
    /* SMTP parameters. */
    $mail->SMTPDebug = 2;
    //$mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'tls';
    $mail->Username = 'damjanpokrajac83@gmail.com';
    $mail->Password = 'mjanda89';
    $mail->Port = 465;
    $mail->isHTML(true);
    
    
    /* Finally send the mail. */
    $mail->send();
}catch (Exception $e){
   echo $e->errorMessage();
}catch (\Exception $e){
   echo $e->getMessage();
}
