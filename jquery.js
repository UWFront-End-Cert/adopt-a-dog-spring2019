$('.card img').mouseover(function () {
    $(this).css('opacity', '1');

}).mouseout(function () {
    $(this).css('opacity', '0.8');

});



$(function () {
    $('#adoptionForm').on('submit', function (e) {
        e.preventDefault();
        var data = $("#adoptionForm :input").serializeArray();
        console.log(data);
        alert('Thank you! The form information has been received.');
    });
});



let adoptionFee = 123.45;

let totalPrice = 0;

function dogClick(data) {
    alert(data);
}

function adoptionClick() {

    totalPrice = adoptionFee + totalPrice;

    alert("You have added a new forever friend to your basket. Your total adoption is $" + totalPrice.toFixed(2));
}

$(document).ready(function () {
    $('.card-button').click(function () {
        $('#checkoutTotal').html('$' + totalPrice.toFixed(2));
    });
});