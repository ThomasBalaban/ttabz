<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer-master/src/PHPMailer.php';
    require 'PHPMailer-master/src/Exception.php';
    
    $formdata = json_decode(file_get_contents('php://input'), true);

    if( ! empty($formdata)) {

        $name = $formdata['name'];
        $email = $formdata['email'];
        $subject = $formdata['subject'];
        $message = $formdata['message'];
        $from = 'contactform@thomasbalaban.com';
        $to1 = 'balabaninteractive@gmail.com';
        $to2 = 'admin@thomasbalaban.com';
        $headers = 'From: thomasbalaban.com@contactform.com';

        $mail = new PHPMailer(true);

        $bodyHTML = '
            <h1>New Email From Contact Form</h1>
            <p><b>Their info:</b></p>
            <ul>
                <li><b>name:</b> ' . $name . ' </li>
                <li><b>email:</b> ' . $email . ' </li>
                <li><b>subject:</b> ' . $subject . ' </li>
            </ul>
            <hr />
            <p><b>Message:</b></p>
            <p>' . $message . '</p>
        ';

        $bodyPLAIN = '
            New Email From Contact Form
            ------------------------------------------------------------
            Their info:
            * name:' . $name . '
            * email: ' . $email . '
            * subject: ' . $subject . '
            ------------------------------------------------------------
            Message:
            ' . $message
        ;

        try {
            $mail -> setFrom($from,  $subject);
            $mail -> addAddress($to1, $name);
            $mail -> addAddress($to2, $name);

            $mail -> isHTML(true); 
            $mail -> Subject = $email . ': ' . $subject;
            $mail -> Body = $bodyHTML;
            $mail -> AltBody = $bodyPLAIN;

            $mail -> send();
        } catch (Exception $e){
            echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
        }
    }
    

  
?>