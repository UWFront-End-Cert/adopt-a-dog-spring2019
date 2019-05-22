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