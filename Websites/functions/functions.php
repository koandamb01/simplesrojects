<?php
include "vars.php";

function test_input($data){
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
}


function formatData($data){
	$data = str_replace("(", "", $data);
	$data = str_replace(")", "", $data);
	$data = str_replace("-", "", $data);	
	return $data;
}
?>