<?php

session_start();

if(!isset($_SESSION['utilisateur'])){
    header('Location: login.php');
    exit;
}
$_SESSION['new']=null;
$_SESSION['old']=null;
$filter=1;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Accueil</title>
    <link rel="stylesheet" href="CSS/accueil.css">
</head>
<body>
    <!-- HEADER -->
    <header class="top-bar">
        <img class="logo" src="media/Qwerty.png" alt="Logo">

        <nav class="icons">
            <a href="accueil.php"><img src="medias/home on.png" alt="Home"></a>
            <a href="ajouter.php"><img src="medias/add.png" alt="Add"></a>
            <a href="profil.php"><img src="medias/user off.png" alt="Profile"></a>
        </nav>
        <div></div>
    </header>
<form id="Form" method="post" action="">
    <main class="container">
        <!-- Contenedor de Cards -->
        <section class="contenedor">
            <?php
require 'queryFilter.php';
require 'tiempo.php';
            foreach ($cards as $card) : ?>
            <article class="card">
    <img src= "<?php echo $card['photo_path'] ?>" alt="Card Image">

    <div class="card-content">
        <div class="card-user">
            <div class="profil">
                <img src="medias/profile.png" alt="User Profile">
                <span class="user"><?php echo $card['nom'] ?></span>
            </div>
            <span>.</span>

            <span><?php echo tiempoTranscurrido($card['date_pub']) ?></span>
        </div>

        <div class="card-text">
            <?php echo $card['titre'] ?>
        </div>

        <div class="card-description">
    <?php echo $card['descripcion'] ?>
    </div>

        <div class="card-TopComment" id="TopComment">
            <p>Top Comment:</p>
            <div class="card-comment">
                <div class="profil">
                    <img src="medias/profile.png" alt="Comment User">
                    <span class="user"><?php echo $card['auteur'] ?></span>
                </div>
                <span>:</span>
                <span><?php echo $card['contenu'] ?></span>
            </div>
        </div>
    </div>
</article>
            <?php endforeach; ?>
        </section>

        <!-- Leaderboard -->
        <aside class="leaderboard" id="leaderboard">
            <h2>Filter:</h2>
            <div class="opciones">
                <label for="order-select">ORDER BY:</label>
                <div class="select-wrapper" id="select">

                    <?php 
                    $filter = $_POST['filter'] ?? 1; 
                ?>
                    <select name="filter" id="order-select">
                        <option value="1" id="new" <?php if($filter == 1){ echo 'selected'; $_SESSION['new']=false; $_SESSION['old']=true;}else{echo ''; } ?>>Lo Mas Recientes</option>
                        <option value="2" id="old" <?php if($filter == 2){ echo 'selected'; $_SESSION['old']=false; $_SESSION['new']=true;}else{echo ''; } ?>>Lo Mas Antiguos</option>
                    </select>
                    <?php ; ?>
                </div>
            </div>
        </aside>

<aside class="comentarios oculto" id="comentario">
            <h2>Commentaire:</h2>
<?php 
require 'queryCommentaire.php';

        foreach ($cards as $card) : ?>
            <div class="commentaire">
            <img src="images/default-profile.png" alt="Profil" class="comment-avatar">

            <div class="comment-content">
                <span class="comment-author">
                    <?php echo htmlspecialchars($card['auteur']); ?>
                </span>

                <p class="comment-text">
                    <?php echo htmlspecialchars($card['contenu']); ?>
                </p>
            </div>
        </div>
                <?php endforeach; ?>

        </aside>
    </main>
</form>    
<script>
    
    const TopComment = document.getElementById('TopComment');
    const leaderboard = document.getElementById('leaderboard');
    const comentarios = document.getElementById('comentario');
    const select = document.getElementById('order-select');
    const form = document.getElementById("Form");
    
    TopComment.addEventListener("click", ()=> {
        comentarios.classList.toggle("oculto");
        leaderboard.classList.toggle("oculto");
    })

    select.addEventListener("change", ()=> {
    form.submit();
    })
</script>
</body>
</html>