
$(function(){

    $('p.checkout-total').text('$' + cartTotal.toFixed(2));

    $('button.adopt-button').click(function() {
        $('p.checkout-total').text('$' + cartTotal.toFixed(2));
    });

    $('.gallery-item').mouseover(function(){
        $(this).css('transition', 'transform .5s')
        $(this).css('transform', 'scale(1.3)')
        $(this).css('z-index', '9')
        $(this).css('backgroundColor', 'white')
    });
    $('.gallery-item').mouseleave(function(){
        $(this).css('transition', 'transform .5s')
        $(this).css('transform', 'scale(1)')
        $(this).css('z-index', 'auto')
    });
  });
