
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

$('form').append('<button class="adopt-button-checkout" type="button">Submit</button>');

let inputValues = $('input').find('*').val();

$('button').on("click", function() {
    event.preventDefault();
    console.log($('input').find('*').val());
    console.log(inputValues);

    console.log($('form').serializeArray());

});

