
// *********REFACTORED CART TOTAL HANDLER

let total = 0
$('.adopt-btn').click(function(e){
    let price = $(this).attr('value')
    total = Number(total) + Number(price)
    total = total.toFixed(2)
    console.log(total)
    $('#cart-total').text('$' + total)
  });

// *********REFACTORED FORM DATA HANDLER TO JQUERY

$('form').submit(function(event){
  console.log($(this).serializeArray());
  event.preventDefault();
  alert('Thank you. The form information has been received');
});
