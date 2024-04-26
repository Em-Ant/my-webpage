<?php
if (isset($_POST['action']) && !empty($_POST['action'])) {
	$action = $_POST['action'];

	switch ($action) {
		case 'ajax-test':
			$a = $_POST;
			$a["status"] = 'Test Success';
			echo json_encode($a);
			break;
		case 'send-mail':
			//Email information
			$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

			if (filter_var($email, FILTER_VALIDATE_EMAIL) !== false) {

				$admin_email = "admin@example.com";

				$message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

				//send email
				mail($admin_email, "Contact from Website", $message, "From:" . $email);
				$a = $_POST;
				$a["status"] = 'Success';
				echo json_encode($a);
			} else {
				header("HTTP/1.1 401 Unauthorized");
			}
			break;
		default:
			header("HTTP/1.1 401 Unauthorized");
	}
}
