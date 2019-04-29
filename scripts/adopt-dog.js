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
