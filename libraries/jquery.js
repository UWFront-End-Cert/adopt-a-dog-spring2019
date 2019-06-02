
$(function(){

    $('p.checkout-total').text('$' + cartTotal.toFixed(2));

    $('button.adopt-button').click(function() {
        $('p.checkout-total').text('$' + cartTotal.toFixed(2));
    });

    $('.gallery-item').hover(function(){
        $(this).css('transition', 'transform .5s')
        $(this).css('transform', 'scale(1.3)')
        $(this).css('z-index', '9')
        $(this).css('backgroundColor', 'white')
    },
    function(){
        $(this).css('transition', 'transform .5s')
        $(this).css('transform', 'scale(1)')
        $(this).css('z-index', 'auto')
    });

  });




  //checkout page

$('form').append('<button class="adopt-button-checkout" type="submit">Submit</button>');

$('form').submit(function(e) {
    event.preventDefault();
    console.log($('#name:input').val());
    console.log($('#email:input').val());
    console.log($('#address:input').val());
    console.log($('#city:input').val());
    console.log($( '#state :selected' ).val());
    console.log($('#zip:input').val()); 
    console.log($('input:checked').val());
    console.log($( '#pickup-location :selected' ).val())
  });
