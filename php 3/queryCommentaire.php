<?php

require 'database.php';

try{
$sql= 'SELECT * FROM commentaire';
$stlt= $pdo->query($sql);
$cards= $stlt->fetchAll(PDO::FETCH_ASSOC);

}catch(PDOException $e){
    echo "Erreur type: " . $e->getMessage();
}
?>