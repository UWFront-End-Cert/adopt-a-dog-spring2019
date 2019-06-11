let total = 0;

function runningTotal(cost) {
  total += cost;
  alert('Your total is: $' + (total.toFixed(2)));
  $(".running-total").text(total.toFixed(2));
}
