let total = 0;
let price = 123.45;

function imgClick(name, breed, age) {
  alert(`Name of the dog: ${name} ( ${breed} )
Cost is ${age}`);
}

$('.button').click(function(){
	total = total + price;
	$('.cart-price').text('$'+total);
	alert("This dog is added to your cart. Total cost: $"+total);
})


$('.item').hover(function(e){
	$('img', this).addClass('img-hover');
},
function() {
    $('img', this).removeClass( "img-hover" );
  });

