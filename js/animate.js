$(document).ready(function(){
  $('.doggo-card').hover(
    // on mouseover
    function(){
      $(this).animate({
        margin: "-=1%",
      },200);
    },
    //  on mouseout
    function(){
      $(this).animate({
        margin: "+=1%",
      },200);
    }
  );
});
