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