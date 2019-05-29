let cartTotal = 0;

// describes dog when img is clicked
function dogDescription(name, attribute, price) {
  alert(`${name}, ${attribute}, $${price}`)
}

// calculates running total of price of all dogs in cart
function addToTotal(price) {
  cartTotal += price;
  alert(`Your cart total is: $${cartTotal}`);
  $('.total').text(`$${cartTotal}`);
}


$('form').submit(function (e) {
  e.preventDefault();
  // get all the inputs into an array.
  var $inputs = $('form :input');

  // get an associative array of just the values.
  var values = {};
  $inputs.each(function () {
    values[this.name] = $(this).val();
  });
  console.log(values);
});
