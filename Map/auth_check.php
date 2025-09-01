<?php
session_start();

ini_set('session.cookie_httponly', 1);
ini_set('session.cookie_secure', 1); // Enable this if using HTTPS
session_regenerate_id(true);

if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit;
}
?>