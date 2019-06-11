$(document).ready(function(){
  $('.profile').mouseover(function(e) {
    $('figure', this).addClass('hover-outline');
    console.log('you have hovered!');
  });
  $('.profile').mouseout(function(e) {
    $('figure', this).removeClass('hover-outline');
  });
});
