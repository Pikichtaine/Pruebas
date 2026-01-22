<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Interface Futuriste</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Inter', sans-serif;
        }

        body {
            background: radial-gradient(circle at top, #0a1f44, #020b1a);
            color: white;
            min-height: 100vh;
        }

        /* ===== NAVBAR ===== */
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 18px 60px;
            background: rgba(255,255,255,0.95);
        }

        .logo {
            font-size: 22px;
            font-weight: 700;
            color: #000;
            font-family: cursive;
        }

        nav a {
            margin: 0 18px;
            text-decoration: none;
            color: #000;
            font-weight: 500;
        }

        .btn-nav {
            background: #0b132b;
            color: white;
            padding: 8px 18px;
            border-radius: 10px;
            text-decoration: none;
            font-size: 14px;
        }

        /* ===== HERO ===== */
        .hero {
            position: relative;
            min-height: calc(100vh - 80px);
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            overflow: hidden;
        }

        /* Effet futuriste */
        .hero::before {
            content: "";
            position: absolute;
            inset: 0;
            background:
                linear-gradient(120deg, rgba(0,140,255,0.15), transparent 40%),
                radial-gradient(circle at bottom, rgba(0,255,255,0.15), transparent 60%);
            z-index: 1;
        }

        .hero-content {
            position: relative;
            z-index: 2;
            max-width: 900px;
            padding: 40px;
        }

        h1 {
            font-size: 56px;
            font-weight: 800;
            line-height: 1.1;
            text-transform: uppercase;
            margin-bottom: 25px;
            text-shadow: 0 0 20px rgba(0,150,255,0.4);
        }

        p {
            font-size: 16px;
            opacity: 0.9;
            margin-bottom: 30px;
        }

        /* ===== BUTTONS ===== */
        .buttons {
            display: flex;
            justify-content: center;
            gap: 15px;
        }

        .btn {
            padding: 10px 22px;
            border-radius: 12px;
            border: none;
            font-size: 14px;
            cursor: pointer;
        }

        .btn-light {
            background: white;
            color: #000;
        }

        .btn-dark {
            background: rgba(255,255,255,0.15);
            color: white;
            backdrop-filter: blur(6px);
        }

        .btn:hover {
            transform: translateY(-2px);
            transition: 0.2s;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
            header {
                padding: 15px 25px;
            }

            nav {
                display: none;
            }

            h1 {
                font-size: 38px;
            }
        }
    </style>
</head>
<body>

<header>
    <div class="logo">Logo</div>

    <nav>
        <a href="#">Accueil</a>
        <a href="#">Connexion</a>
        <a href="#">Fonctionnalités</a>
        <a href="#">Ressources ▾</a>
    </nav>

    <a href="#" class="btn-nav">Entrer</a>
</header>

<section class="hero">
    <div class="hero-content">
        <h1>Entrez dans l'avenir<br>maintenant</h1>
        <p>
            Une interface moderne et sécurisée vous attend.
            Accédez à votre compte avec quelques clics.
        </p>

        <div class="buttons">
            <button class="btn btn-light">Connexion</button>
            <button class="btn btn-dark">Créer</button>
        </div>
    </div>
</section>

</body>
</html>
