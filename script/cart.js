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

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const entires = formData.entries();

  for (var input of entires) {
    console.log(input[0] + ': ' + input[1]);
  }
});
