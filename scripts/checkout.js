//Contact Forms

function show_alert() {
	alert("The form has been submitted.");
}//Alert for form & Console log the values inside the form, you can build a string or build an object.

//Validate email
function emailValid (inputText) {
	var email = document.getElementById('checkoutEmail');
	var filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if(inputText.value.match(email.value)) {
		email.focus();
	return true;
	}

	else {
		alert("Please enter a valid email address.");
		email.focus();
		return false;
	}
} //Code c/o https://www.codeproject.com/Tips/492632/Email-Validation-in-JavaScript
