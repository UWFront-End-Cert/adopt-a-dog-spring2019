/*const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you. The form information has been received.');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const address = document.getElementById('address');
  const city = document.getElementById('city');
  const state = document.getElementById('state');
  const zipCode = document.getElementById('zip-code');
  const adoptStatus = document.querySelectorAll('.adopter-status');
  const location = document.getElementById('location');
  console.log(
    {name: name.value,
    email: email.value,
    address: address.value,
    city: city.value,
    state: state.value,
    zipCode: zipCode.value,
    adoptStatus: adoptStatus.value,
    location: location.value
  });
});*/

$('form').submit(function(e) {
  e.preventDefault();
  alert('Thank you. The form information has been received.');
  console.log($('form').serialize());
})
