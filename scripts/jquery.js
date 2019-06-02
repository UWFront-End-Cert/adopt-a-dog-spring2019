$('h1').addClass('large-headline');
$('.aside-blog').addClass('half-width');

/*
$('.dog-tile').hover(function(e) {
  $('img', this).addClass('small').fadeOut().fadeIn().addClass('normal');
})

$('.dog-tile').hover(function(e) {
	$('img', this).addClass('tile-border');
});

$('.dog-tile').hover{function(e) {
	$('img', this).addClass('zoom');
});

$('.dog-tile').hover(
   function () {
		$('img', this).css({"transform": "scale(.8)"});
   }, 
   function () {
		$('img', this).css({"transform": "scale(1.0)"});
   }
);
*/

$('.dog-tile').hover(
   function () {
		$('img', this).addClass('small');
   }, 
   function () {
		$('img', this).removeClass('small');
   }
);

$('.dog-tile').hover(
   function () {
	  $(this).css({"background-color":"lightgreen"});
   }, 
   function () {
	  $(this).css({"background-color":"white"});
   }
);

/*
$('div').on('click',function(){
	$('p',this).animate({opacity: 0.0,paddingLeft: '+=80'}
						 , 500
						 , function(){ $(this).remove();}
						);
});
*/


