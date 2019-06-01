/* using js
function successMessage() {
  alert('Thank you. The form information has been received.');
  let formData = []
  let user = $('#name');
  let email = $('#email');
  let address = $('#address');
  let city = $('#city');
  let state = $('#state');
  let zip = $('#zip');
  let adopterStatus = document.querySelector('input[name="adopterStatus"]:checked')
  let pickupLocation = $('#pickupLocation');
  formData.push(user);
  formData.push(email);
  formData.push(address);
  formData.push(city);
  formData.push(state);
  formData.push(zip);
  formData.push(adopterStatus);
  formData.push(pickupLocation);
  console.log(formData);
} 
*/

// using jquery
function successMessage() {
  alert('Thank you. The form information has been received.');
  let formData = []
  let user = $('#name').val();
  let email = $('#email').val();
  let address = $('#address').val();
  let city = $('#city').val();
  let state = $('#state').val();
  let zip = $('#zip').val();
  let adopterStatus = $('input[name="adopterStatus"]:checked').val()
  let pickupLocation = $('#pickupLocation').val();
  formData.push(user);
  formData.push(email);
  formData.push(address);
  formData.push(city);
  formData.push(state);
  formData.push(zip);
  formData.push(adopterStatus);
  formData.push(pickupLocation);
  console.log(formData);
}