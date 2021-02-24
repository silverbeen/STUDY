<?php

$db = new PDO("mysql:host=localhost;dbname=new_database;charset=utf8", "root", "");

$stmt = $db->prepare("select * from hello_world");
$stmt->execute();
$result = $stmt->fatchAll(PDO::FETCH_NAMED);

for($i= 0; $i<count($result); $i++){
    print_r($result[$i]);
}

?>