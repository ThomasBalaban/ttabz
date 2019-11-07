<?php
    require 'http://thomasbalaban.com/assets/PHPMailer-master/src/PHPMailer.php';
    
    $formdata = json_decode(file_get_contents('php://input'), true);

    if( ! empty($formdata)) {

        $name = $formdata['name'];
        $email = $formdata['email'];
        $subject = $formdata['subject'];
        $message = $formdata['message'];

        $message = '<p>Hi, <br />Some one has submitted contact form.</p>';
        $message .= '<p><strong>Name: </strong>'.$name.'</p>';
        $message .= '<p><strong>Email: </strong>'.$email.'</p>';
        $message .= '<p><strong>subject: </strong>'.$subject.'</p>';
        $message .= '<p><strong>Name: </strong>'.$message.'</p>';
  
        $to = 'balabaninteractive@gmail.com';
        $headers = 'From: thomasbalaban.com@contactform.com';

        mail($to, $subject, $message, $headers);
    }
    

  
?>