<?php
	header("Access-Control-Allow-Origin: *");
	$a = ['json' =>'hello from Apache'];
	echo json_encode($a);
?>
