let cartTotal = 0;

function aboutDog(name, breed, cost) {
  alert(`${name}, ${breed}, $${cost}`)
}

function addToTotal(cost) {
  cartTotal += cost;
  alert(`Your current total is: $${cartTotal}`);
}

$('form').submit(function (e) {
  e.preventDefault();

  var $inputs = $('form :input');

  var values = {};
  $inputs.each(function () {
    values[this.name] = $(this).val();
  });
  console.log(values);
});
