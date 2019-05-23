let cartTotal = 0;

function aboutDog(name, breed, cost) {
  alert(`${name}, ${breed}, $${cost}`)
}

function addToTotal(cost) {
  cartTotal += cost;
  alert(`Your current total is: $${cartTotal}`);
}
