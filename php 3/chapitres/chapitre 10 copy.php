<?php
class Dadabase{
    
    public $conn;

    public function getConnection() {
    $this->conn=null;
    try{
        $this->conn= new PDO("mysql:host=localhost, dbname=blogdb;charset=utf8", "root", "Bl4z3.00");
        $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }catch(PDOException $e){
        echo "Erreur de connection type: " . $e->getMessage();
    }
    return $this->conn;
    }
}

class user{
    private $conn;

    public $id;
    public $nom;
    public $email;

    public function _construct($db){
        $this->conn=$db;
    }

    public function create(){
        $sql="INSERT INTO users (nom, email) VALUES (:nom, :email)";
        $strt=$this->conn->prepare($sql);
        $strt->execute([
            $this->nom, $this->email
        ]);
    }

    public function read(){
        $sql="SELECT * FROM users";
        $strt=$this->conn->prepare($sql);
        $strt->execute();
    }
}

$database= new Dadabase();
$db= $database->getConnection();

$user= new user();
$user->nom= "Alice";
$user->email= "AliceMcalister@gmail.com";
$user->create();

$liste= $user->read();
foreach ($liste as $u) {
    echo $u['nom'] . " - " . $u['email'] . "<br>";
}
?>