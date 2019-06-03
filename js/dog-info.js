let runningTotal = 0;

function alertDogInfo(name, breed, fee) {
    alert(name + ', ' + breed + ', $' + fee);
}

function addToTotal(fee) {
    runningTotal += fee;
    alert('Running total: $' + runningTotal);
}

function updateCheckoutTotal() {
  $('#checkout-total').text('$' + runningTotal);
}

$(document).ready(function() {
  // Add an effect to dog tiles on hover
  $('.dog').hover(
    function() {
      $(this).find('img').css({
        'transform': 'rotate(360deg)'
      });
    },
    function() {
      $(this).find('img').css({
        'transform': 'none'
      });
    }
  );

  // Update checkout total on button clicks
  $('.dog-button').click(function(e) {
    addToTotal(parseFloat($(this).attr('price')));
    updateCheckoutTotal();
  });
});
