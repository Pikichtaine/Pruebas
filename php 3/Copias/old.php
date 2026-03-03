<?php
session_start();
if(!isset($_SESSION['utilisateur'])){
    header('Location: login.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Round Results</title>
    <link rel="stylesheet" href="CSS/accueil.css">
</head>
<body>
<!-- HEADER -->
    <header class="top-bar">
    <img class="logo"src="media/Qwerty.png" alt="Descripción de la imagen">

    <div class="icons">

    <a href="accueil.php">
    <img src="medias/home on.png">
    </a>
    
    <a href="ajouter.php">
    <img src="medias/add.png">
    </a>

    <a href="profil.php">
    <img src="medias/user off.png">
    </a>

    </div>

    <div></div>

    </header>
    <div class="container">

<div class="contenedor">

        <!-- card -->
        <div class="card">
            
            <img src="medias/Game Show.png" alt="meme">

            <div class="card-user">
                <div class="profil">
                <img src="medias/profile.png">
                <span class="user">Pikichtaine</span>
                </div>
                <span>.</span>
                <span>3j</span>
            </div>

            <div class="card-text">
                Bienvenue sur le "Game Show"!
            </div>
<div class="card-TopComment">
            <p>Top Comment:</p>
            <div class="card-comment">
                <div class="profil">
                <img src="medias/profile.png">
                <span class="user">Walid</span>
                </div>
                <span>:</span>
                <span>This is gonna be awersome!</span>
            </div>

            </div>

            
        </div>
        <br>
        <div class="card">
            
            <img src="medias/Game Show.png" alt="meme">

            <div class="card-user">
                <div class="profil">
                <img src="medias/profile.png">
                <span class="user">Pikichtaine</span>
                </div>
                <span>.</span>
                <span>3j</span>
            </div>

            <div class="card-text">
                Bienvenue sur le "Game Show"!
            </div>
<div class="card-TopComment">
            <p>Top Comment:</p>
            <div class="card-comment">
                <div class="profil">
                <img src="medias/profile.png">
                <span class="user">Walid</span>
                </div>
                <span>:</span>
                <span>This is gonna be awersome!</span>
            </div>

            </div>

            
        </div>
    </div>

        <!-- Leaderboard -->
        <div class="leaderboard">
            <h2>Filter:</h2>
        <div class="opciones">
    <label>ORDER BY:</label>

    <div class="select-wrapper">
        <select>
            <option>Lo Mas Recientes</option>
            <option>Lo Mas Antiguos</option>
            <option>Mas Populares</option>
        </select>
    </div>
</div>

        </div>

    </div>

</body>
</html>