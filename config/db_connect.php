<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
// Database connection parameters
$host = "localhost";
$user = "multistream6_cake_tool_nft_1";
$password = "000000";
$database = "multistream6_cake_tool_nft_1";

// Create connection
$conn = mysqli_connect($host, $user, $password, $database);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
