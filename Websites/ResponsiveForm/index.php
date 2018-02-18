<?php
	include "../functions/functions.php";
	session_start();
	
	// define variable and set to empty
	$firstname = $lastname = $city = "";
  
  if($_SERVER["REQUEST_METHOD"] == "POST"){
      
	  $firstname = test_input($_POST['firstname']);
	  $_SESSION['firstname'] = $firstname;
	  
      $lastname = test_input($_POST['lastname']);
	  $_SESSION['lastname'] = $lastname;
	  
	  $city = $_POST['city'];
	  $_SESSION['city'] = $city;
	  
	  header("location: message.php");
  }
?>

<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>Validation Form</title>
		<link rel="stylesheet" type="text/css" href="style.css">
	</head>

<body>
	<div class="body-container">
	<header><h1>Contact Form</h1></header><br>
  
	<div class="form-container">
	<form id="myForm" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" method="post" onsubmit= "return validateForms()">
	  <fieldset>
		<legend>Personal Innformation</legend><br>
	   
			<label>First Name:</label>
			<div class="inputContainer">
				<span id="fnameErr"></span>
				<div><input type="text" name="firstname" value="<?php echo $firstname;?>"></div>
			</div>
			
			<label>Last Name:</label>
			<div class="inputContainer">
				<span id="lnameErr"></span>
				<div><input type="text" name="lastname" value="<?php echo $lastname;?>"></div>
			</div>
			
			<label>Address:</label>
			<div class="inputContainer">
				<span id="addressErr"></span>
				<div><input type="text" name="address" value="<?php echo $address;?>"></div>
			</div>
			
			<label>City:</label>
			<div class="inputContainer">
				<span id="cityErr"></span>
				<div><input type="text" name="city" value=""></div>
			</div>
			
			<label>State:</label>
			<div class="inputContainer">
				<span id="stateErr"></span>
				<div><select name="state">
				<?php 
				$state_select = "New York";
				
				foreach ($stateList as $stateValue => $stateName) {
					if($stateName == $state_select){
						$selected = 'selected = "selected"';
					}else{
						$selected = '';
					}
					echo "<option value='$stateValue' $selected>$stateName</option>";
				}
				?>
				</select></div>
			</div>
			
			<label>ZipCode:</label>
			<div class="inputContainer">
				<span id="zipcodeErr"></span>
				<div><input type="text" name="zipcode" value="<?php echo $zipcode;?>"></div>
			</div>	
			
			<label>Phone:</label>
			<div class="inputContainer">
				<span id="phoneErr"></span>
				<div><input type="text" name="phone" value="<?php echo $phone;?>"></div>
			</div>
			
			<label>Email:</label>
			<div class="inputContainer">
				<span id="emailErr"></span>
				<div><input type="text" name="email" value="<?php echo $email;?>"></div>
			</div>
			
			<label>Comment:</label>
				<textarea name="comment" rows="3" cols="20"><?php echo $comment;?></textarea>
		<button class="button" name="submit" type="submit" value="submit">Submit</button>
	  </fieldset>
	</form>
	</div><br>
		 <footer>Copyright <?php echo date("m/d/y")?>&copy; Mohamed Koanda</footer><br>
	</div>
	
	<script src="main.js"></script>
</body>
</html>