function validate(){
	var email = document.getElementById("email-input").value
	if (validateEmail(email)){
		document.getElementById("email-input").value = "";
		document.getElementById("error-icon").style.display="none";
		document.getElementById("email-form").style.borderColor = "#ce9797";
		document.getElementsByClassName("error-text")[0].style.display="none";
	}else{
		document.getElementById("error-icon").style.display="block";
		document.getElementById("email-form").style.borderColor = "#f96262";
		document.getElementsByClassName("error-text")[0].style.display="block";
	}
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}