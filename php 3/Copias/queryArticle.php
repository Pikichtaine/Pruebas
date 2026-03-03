<?php

require 'database.php';

try{
$sql= 'SELECT 
    u.nom,
    a.photo_path
FROM utilisateur u
INNER JOIN article a ON u.id = a.id_utilisateur
and u.nom= :nom';
$stlt= $pdo->prepare($sql);
$stlt->execute([
    ":nom"=>$_SESSION['utilisateur']
]);
$cards= $stlt->fetchAll(PDO::FETCH_ASSOC);

}catch(PDOException $e){
    echo "Erreur type: " . $e->getMessage();
}
?>