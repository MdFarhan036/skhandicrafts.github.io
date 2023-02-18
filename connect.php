<?php
	$fullName = $_POST['fullName'];
	$email = $_POST['email'];
	$mobilenumber = $_POST['mobilenumber'];
	$products = $_POST['products'];
	$address = $_POST['address'];
	$pin = $_POST['pin'];

	// Database connection
	$conn = new mysqli('localhost','root','','skhandicrafts');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(fullName, email, mobilenumber, products, address, pin) values(?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("sssssi", $fullName, $email, $mobilenumber, $products, $address, $pin);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>
}