let cartTotal = 0;
let dogCost = 0;

function dogDescription(name, breed, cost) {
  alert(`This is ${name}, a ${breed} breed.  $${cost} to adopt!`)
}

function addToCart(dogCost) {
  cartTotal += dogCost;
  alert(`Your cart total is $${cartTotal.toFixed(2)}`);
}
