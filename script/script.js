let total = 0;
let price = 123.45;

function imgClick(name, breed, age) {
  alert(`Name of the dog: ${name} ( ${breed} )
Cost is ${age}`);
}

function adoptClick(){

	total = total + price;
	alert("This dog is added to your cart. Total cost: $"+total);
}

function buttonClick(){

	console.log("Name: "+form.name.value);
	console.log("Email: "+form.email.value);
	console.log("Address: "+form.address.value);
	console.log("City: "+form.city.value);
	console.log("State: "+form.state.value);
	console.log("Zip Code: "+form.zip.value);
	console.log("Location: "+form.location.value);
	console.log("First Time?: "+form.first_time.value);
};

form.addEventListener('submit', function(event) {
	event.preventDefault();
	alert("Thank you. The form information has been received.");
});



