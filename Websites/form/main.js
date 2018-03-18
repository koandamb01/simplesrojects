function formatData(p){
	p = p.replace("(", "", p);
	p = p.replace(")", "", p);
	p = p.replace("-", "", p);
	return p;
}

function validateFirstName(){
	var first = document.forms['myForm']['firstname'].value;
	var letters = /^[A-Za-z '.-]+$/;
	
	document.forms['myForm']['firstname'].style.background = "#fff";
	if(first.length == 0){
		document.forms['myForm']['firstname'].style.border = "1px solid red";
		document.forms['myForm']['firstname'].focus;
		document.getElementById("fnameErr").innerHTML = "* First Name required";
		document.getElementById("fnameErr").style.display = 'block';
		return false;
	}
	else if(first.match(letters)){
		document.forms['myForm']['firstname'].style.border = "1px solid #ccc";
		document.getElementById("fnameErr").style.display = 'none';
		return true;
	}else{
		document.forms['myForm']['firstname'].style.border = "1px solid red";
		document.forms['myForm']['firstname'].focus;
		document.getElementById("fnameErr").innerHTML = "* Alphabet characters only";
		document.getElementById("fnameErr").style.display = 'block';
		return false;
	}
}

function validateLastName(){
	var last = document.forms['myForm']['lastname'].value;
	var letters = /^[A-Za-z '.-]+$/;
	
	document.forms['myForm']['lastname'].style.background = "#fff";
	if(last.length == 0){
		document.forms['myForm']['lastname'].style.border = "1px solid red";
		document.forms['myForm']['lastname'].focus;
		document.getElementById("lnameErr").innerHTML = "* Last Name required";
		document.getElementById("lnameErr").style.display = 'block';
		return false;
	}
	else if(last.match(letters)){
		document.forms['myForm']['lastname'].style.border = "1px solid #ccc";
		document.getElementById("lnameErr").style.display = 'none';
		return true;
	}else{
		document.forms['myForm']['lastname'].style.border = "1px solid red";
		document.forms['myForm']['lastname'].focus;
		document.getElementById("lnameErr").innerHTML = "* Alphabet characters only";
		document.getElementById("lnameErr").style.display = 'block';
		return false;
	}
}

function validateAddress(){
	var address = document.forms['myForm']['address'].value;
	var letters = /^[0-9a-zA-Z '.-]+$/;
	
	document.forms['myForm']['address'].style.background = "#fff";
	if(address.length == 0){
		document.forms['myForm']['address'].style.border = "1px solid red";
		document.forms['myForm']['address'].focus;
		document.getElementById("addressErr").innerHTML = "* Address required";
		document.getElementById("addressErr").style.display = 'block';
		return false;
	}
	else if(address.match(letters)){
		document.forms['myForm']['address'].style.border = "1px solid #ccc";
		document.getElementById("addressErr").style.display = 'none';
		return true;
	}else{
		document.forms['myForm']['address'].style.border = "1px solid red";
		document.forms['myForm']['address'].focus;
		document.getElementById("addressErr").innerHTML = "* Alphanumeric characters only";
		document.getElementById("addressErr").style.display = 'block';
		return false;
	}
}

function validateCity(){
	var city = document.forms['myForm']['city'].value;
	var letters = /^[A-Za-z '.-]+$/;
	
	document.forms['myForm']['city'].style.background = "#fff";
	if(city.length == 0){
		document.forms['myForm']['city'].style.border = "1px solid red";
		document.forms['myForm']['city'].focus;
		document.getElementById("cityErr").innerHTML = "* City required";
		document.getElementById("cityErr").style.display = 'block';
		return false;
	}
	else if(city.match(letters)){
		document.forms['myForm']['city'].style.border = "1px solid #ccc";
		document.getElementById("cityErr").style.display = 'none';
		return true;
	}else{
		document.forms['myForm']['city'].style.border = "1px solid red";
		document.forms['myForm']['city'].focus;
		document.getElementById("cityErr").innerHTML = "* Alphabet characters only";
		document.getElementById("cityErr").style.display = 'block';
		return false;
	}
}

function validateZipcode(){
	var zipcode = document.forms['myForm']['zipcode'].value;
	var letters = /^([0-9]){5}(([ ]|[-])?([0-9]){4})?$/;
	
	zipcode = formatData(zipcode);
	console.log(zipcode);
	document.forms['myForm']['zipcode'].style.background = "#fff";
	if(zipcode.length == 0){
		document.forms['myForm']['zipcode'].style.border = "1px solid red";
		document.forms['myForm']['zipcode'].focus;
		document.getElementById("zipcodeErr").innerHTML = "* Zipcode required";
		document.getElementById("zipcodeErr").style.display = 'block';
		return false;
	}
	else if(zipcode.match(letters)){
		document.forms['myForm']['zipcode'].style.border = "1px solid #ccc";
		document.getElementById("zipcodeErr").style.display = 'none';
		return true;
	}else{
		document.forms['myForm']['zipcode'].style.border = "1px solid red";
		document.forms['myForm']['zipcode'].focus;
		document.getElementById("zipcodeErr").innerHTML = "* Invalid US zipcode";
		document.getElementById("zipcodeErr").style.display = 'block';
		return false;
	}
}


function validatePhone(){
	var phone = document.forms['myForm']['phone'].value;
	var numbers = /^\d{10}$/;
	
	phone = formatData(phone);
	document.forms['myForm']['phone'].style.background = "#fff";
	if(phone.length == 0){
		document.forms['myForm']['phone'].style.border = "1px solid red";
		document.forms['myForm']['phone'].focus;
		document.getElementById("phoneErr").innerHTML = "* Phone number required";
		document.getElementById("phoneErr").style.display = 'block';
		return false;
	}
	else if(phone.match(numbers)){
		document.forms['myForm']['phone'].style.border = "1px solid #ccc";
		document.getElementById("phoneErr").style.display = 'none';
		return true;
	}else{
		document.forms['myForm']['phone'].style.border = "1px solid red";
		document.forms['myForm']['phone'].focus;
		document.getElementById("phoneErr").innerHTML = "* Invalid US Phone number";
		document.getElementById("phoneErr").style.display = 'block';
		return false;
	}
}


function validateEmail(){
	var email = document.forms['myForm']['email'].value;
	var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
	document.forms['myForm']['email'].style.background = "#fff";
	if(email.length == 0){
		document.forms['myForm']['email'].style.border = "1px solid red";
		document.forms['myForm']['email'].focus;
		document.getElementById("emailErr").innerHTML = "* Email required";
		document.getElementById("emailErr").style.display = 'block';
		return false;
	}
	else if(email.match(mailFormat)){
		document.forms['myForm']['email'].style.border = "1px solid #ccc";
		document.getElementById("emailErr").style.display = 'none';
		return true;
	}else{
		document.forms['myForm']['email'].style.border = "1px solid red";
		document.forms['myForm']['email'].focus;
		document.getElementById("emailErr").innerHTML = "* Invalid email address!";
		document.getElementById("emailErr").style.display = 'block';
		return false;
	}
}

function validateForms(){
	var error = 0;
	
	if(!validateFirstName()){
		error = 1;
	}
	
	if(!validateLastName()){
		error = 1;
	}
	
	if(!validateAddress()){
		error = 1;
	}
	
	if(!validateCity()){
		error = 1;
	}
	
	if(!validateZipcode()){
		error = 1;
	}
	
	if(!validatePhone()){
		error = 1;
	}
	
	if(!validateEmail()){
		error = 1;
	}
	
	if (error == 1){
		return false;
	}
	
	return true;
}