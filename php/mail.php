<?php
require 'phpMailer/PHPMailerAutoload.php';

if (!empty($_POST)) {
    $mail = new PHPMailer;


    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];


    //$mail->SMTPDebug = 3;                               // Enable verbose debug output
    // Set mailer to use SMTP
    $mail->Host = 'mail.cymetria.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username       = "noresponder@cymetria.com";
    $mail->Password       = "yNrPfJP@IGUF";                                   // TCP port to connect to

    $mail->setFrom('contacto@licenciasadobe.com', 'Licencias Adobe');
    // $mail->addAddress('adobe@cymetria.com', 'ADOBE');     // Add a recipient
    $mail->addAddress('juan.morales@cymetria.com', 'ADOBE');     // Add a recipient
    // $mail->addCC('danna.cubillos@cymetria.com');// add cc
    $mail->isHTML(true);                                  // Set email format to HTML

    $mail->Subject = 'Contacto Web LicenciasAdobe';
    $mail->Body    = 'Nombre: ' . $nombre . '<br>Apellido: ' . $apellido . '<br>Email: ' . $email . '<br>Telefono: ' . $telefono;
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';



    if (!$mail->send()) {
        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {

        echo "
        <head>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <script src='//cdn.jsdelivr.net/npm/sweetalert2@10'></script>
        </head>
        <body>
        <script>Swal.fire(
                'Tu mensaje ha sido enviado correctamente. ',
                'Gracias por confiar en nosotros.',
                'success'
        ).then(()=>{window.location.href = 'https://licenciasadobe.com/';});</script>
        
        </body>
        ";
    }
}
