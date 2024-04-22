<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  $pais = $_POST['pais'];

  // Configura la dirección de correo electrónico donde se enviará el formulario
  $to = "brand.wise22@gmail.com";

  // Configura el asunto del correo electrónico
  $subject = "Nuevo mensaje de contacto";

  // Crea el cuerpo del correo electrónico
  $body = "Nombre: " . $name . "\n";
  $body .= "Pais: " .$pais . "\n";
  $body .= "Correo electrónico: " . $email . "\n";
  $body .= "Mensaje: " . $message . "\n";

  // Envía el correo electrónico
  if (mail($to, $subject, $body)) {
    // Redirecciona al usuario a una página de éxito
    header("Location: enviado.html");
    exit();
  } else {
    // Redirecciona al usuario a una página de error
    header("Location: error.html");
    exit();
  }
}
?>