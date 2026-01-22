<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>Connexion</title>
<link rel="stylesheet" href="style.css">
</head>
<body class="center">
<form class="login-box" method="POST" action="">

    <h2>Connexion</h2>

    <label>Nom: </label>
    <input type="text" name="username" required>


    <label>Mot de passe: </label>
    <input type="password" name="password" required>

    <label>Captcha: Combien <?php echo $ecuacion ?> </label>
    <input type="text" name="captcha" required>

    <button type="submit">Se connecter</button>

</form>
</body>
</html>
<?php
if($_SERVER['REQUEST_METHOD']=="POST") {
    if(isset($_POST['username'] , $_POST['password'] , $_POST['captcha'])) {
        if (is_numeric($_POST['captcha']) && $_POST['captcha']==$resultado) {
        echo "Gracias por su coneccion";
        }
    }
}
function generer(){
  // números aleatorios entre 0 y 20
    $num1 = random_int(0, 20);
    $num2 = random_int(0, 20);

if ($num1 < $num2) {
    [$num1, $num2] = [$num2, $num1];
}
    // operador aleatorio (+ o -)
    $operador = random_int(0, 1) === 0 ? '+' : '-';

    // ecuación en texto
    $ecuacion = "$num1 $operador $num2";
switch ($ecuacion) {
        case '+':
            $resultado = $a + $b;
        case '-':
            $resultado = $a - $b;
    }
    
}

?>


  

