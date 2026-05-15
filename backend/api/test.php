<?php

require_once "../config/database.php";

$query = $pdo->query("SELECT * FROM users");

$users = $query->fetchAll(PDO::FETCH_ASSOC);

echo "<pre>";

print_r($users);

echo "</pre>";