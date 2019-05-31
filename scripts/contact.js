function sConsole(event) {
    alert('Thank you. The form information has been received.');
    event.preventDefault();

    console.log ( 'name   : ' + $('input:text').val() );   
	console.log ( 'email  : ' + $('#email').val() );  
	console.log ( 'address: ' + $('#address').val() );
	console.log ( 'city   : ' + $('#city').val() );
	console.log ( 'state  : ' + $('#state').val() );
	console.log ( 'zip    : ' + $('#zip').val() );
    console.log ( 'Pickup location    : ' + $('#loc').val() );s
    console.log ( 'First time adopted?') ;
	console.log ( $('input[type="radio"]:checked').val() );	
}
