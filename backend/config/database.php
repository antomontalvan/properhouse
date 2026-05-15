<?php

$host = "localhost";
$dbname = "properhouse";
$username = "root";
$password = "";

try {

    $pdo = new PDO(
        "mysql:host=$host;dbname=$dbname;charset=utf8mb4",
        $username,
        $password
    );

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "Conexion exitosa a la base de datos";

} catch (PDOException $e) {

    die("Error de conexion: " . $e->getMessage());

}