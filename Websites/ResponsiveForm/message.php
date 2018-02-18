<?php
	include "../functions/functions.php";
	session_start();
	$firstname = $_SESSION['firstname'];
	$lastname = $_SESSION['lastname'];
	$city = $_SESSION['city'];
?>
<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		
		<title>Validation Form | Message</title>
	<style>
		body{
			text-align: center;
		}
		.body-container{
			width:45%;
			margin:auto;
			margin-top: 15%;
			overflow: auto;
			background-color:#99ff99;
			text-align: center;
			border: 2px solid black;
		}
		
		
		.button {
			background-color: #4CAF50; /* Green */
			border: none;
			color: white;
			padding: 5px 22px;
			text-align: center;
			text-decoration: none;
			display: inline-block;
			font-size: 16px;
			cursor: pointer;
			border-radius: 11px;
		}
	</style>
	</head>

<body>
	<div class="body-container">
		<h1>Thank You</h1><br>
		<p> <?php echo $firstname; ?>, we hope to see you in <?php echo $city; ?>!</p>
	</div><br>
	<a class="button" href="index.php"> Fill another form </a>
</body>





</html>