<?php
	header("Access-Control-Allow-Origin: *");
	if(isset($_POST['action']) && !empty($_POST['action'])){
		$action = $_POST['action'];
		
		switch($action){
			case 'ajax-test' :
				$a = $_POST;
				$a["status"] = 'Test Success';				
				echo json_encode($a);
				break;
		}
	}
?>
