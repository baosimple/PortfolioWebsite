<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $visitor_phone = $_POST['phone'];
    $message = $_POST['message'];

    $email_from = 'important@baopham.com';
    $email_subject = 'New Visitor Message';
    $email_body = 'Name: $name.\n'.
                    'User Email: $visitor_email.\n'.
                        'User Phone Number: $visitor_phone.\n'.
                            'Message: $message.\n';

    $to = 'bao.d.pham@vanderbilt.edu';

    $headers = 'From: $email_from \r\n';
    $headers .= 'Reply-To: $visitor_email \r\n';
    mail($to, $email_subject, $email_body, $headers);
    header('Location: index.html');
?>