function sConsole(event) {
    alert('Thank you. The form information has been received.');
    event.preventDefault();
    console.log ( 'name   : ' + document.getElementById('name').value );
	console.log ( 'email  : ' + document.getElementById('email').value );  
	console.log ( 'address: ' + document.getElementById('address').value );
	console.log ( 'city   : ' + document.getElementById('city').value );
	console.log ( 'state  : ' + document.getElementById('state').value );
	console.log ( 'zip    : ' + document.getElementById('zip').value );
    console.log ( 'Pickup location    : ' + document.getElementById('loc').value );
    console.log ( 'First time adopted?') ;
    if (document.getElementById('firstYes').checked) {
        console.log(document.getElementById('firstYes').value);
        }
    else if (document.getElementById('firstNo').checked) {
        console.log(document.getElementById('firstNo').value);
        };   
  }
 