let total = 0;
let count = 0;
function reset(){
	total = 0;
	count = 0;
	console.log('total is ' + total);
}
function buyIt(price){
	count ++;
	total +=  price;
	alert('Total number of dogs: ' + count + '\nYour total is $' + total.toFixed(2));
}
function dogArray(dog){
	let dogName = dog[0].charAt(0).toUpperCase()+dog[0].slice(1);
	let log = dogName + " is " + dog[1] + "\nCost $" + dog[2] + " to adopt.";
	console.log(log);
	alert(log);
} 
function dogObj(dog){
	let dogName = dog.name.charAt(0).toUpperCase()+dog.name.slice(1);
	console.log(dogName);
	let log = dogName + " is " + dog.breed + "\nCost $" + dog.cost+ " to adopt.";
	console.log(log);
	alert(log);
} 
function dogInfo(name,breed,cost){
	let dogName = name.charAt(0).toUpperCase()+name.slice(1);
	let log = dogName + " is " + breed + "\nCost $" + cost + " to adopt.";
	console.log(log);
	alert(log);
} 
function checkOut(){
	var subTotal = document.getElementById('cost');
	subTotal.textContent = '$' + total.toFixed(2);
	subTotal.style.color = "magenta";
	subTotal.style.fontSize = "xx-large"; 
}
