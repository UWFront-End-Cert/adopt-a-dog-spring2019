let cartTotal = 0;

// describes dog when img is clicked
function dogDescription(name, attribute, price) {
  alert(`${name}, ${attribute}, $${price}`)
}

// calculates running total of price of all dogs in cart
function addToTotal(price) {
  cartTotal += price;
  alert(`Your cart total is: $${cartTotal}`);
}
