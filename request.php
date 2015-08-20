<?php
	if(isset($_POST['action']) && !empty($_POST['action'])){
		$action = $_POST['action'];
		
		switch($action){
			case 'ajax-test' :
				$a = $_POST;
				$a["status"] = 'Test Success';				
				echo json_encode($a);
				break;
			case 'some-keyword' :
				  //Email information
				$admin_email = "my-email@example.com";
				$email = $_POST['email'];
				$message = $_POST['message'];

				//send email
				mail($admin_email, "Contact from Website", $message, "From:" . $email);
				$a = $_POST;
				$a["status"] = 'Success';				
				echo json_encode($a);
				break;
			default:
				header("HTTP/1.1 401 Unauthorized");
		}
	}
?>
