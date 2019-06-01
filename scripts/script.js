let total = 0

/* js cart total
function cartTotal() {
  total += 123.45;
  alert('Cart total: $' + total);
}
*/

$('button').click(function(e) {
  total += 123.45;
  alert('Cart total: $' + total);
});

$('.card').hover(function (e) {
  $(this).toggleClass('selected');
});

function dogInfo(data) {
  alert(data);
}
