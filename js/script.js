let cartTotal = 0;

function dogDescription(name, attribute, price) {
  alert(`${name}, ${attribute}, $${price}`)
}

function addToTotal(price) {
  cartTotal += price;
  alert(`Your cart total is: $${cartTotal}`);
}
