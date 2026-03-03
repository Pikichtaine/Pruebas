<?php

require 'database.php';
try{
$sql= 'SELECT 
    u.nom,
    a.id,
    a.photo_path,
    a.date_pub,
    a.titre,
    a.descripcion,
    c.auteur,
    c.contenu
FROM utilisateur u
INNER JOIN article a ON u.id = a.id_utilisateur
LEFT JOIN commentaire c ON a.id = c.id_article
ORDER BY a.date_pub desc;';
$stlt= $pdo->query($sql);
$cards= $stlt->fetchAll(PDO::FETCH_ASSOC);

}catch(PDOException $e){
    echo "Erreur type: " . $e->getMessage();
}


?>