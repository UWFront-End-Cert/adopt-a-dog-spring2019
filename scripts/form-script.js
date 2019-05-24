


function successMessage() {
  alert('Thank you. The form information has been received.');
  let formData = []
  let user = document.getElementById('name');
  let email = document.getElementById('email');
  let address = document.getElementById('address');
  let city = document.getElementById('city');
  let state = document.getElementById('state');
  let zip = document.getElementById('zip');
  let adopterStatus = document.querySelector('input[name="adopterStatus"]:checked').value
  let pickupLocation = document.getElementById('pickupLocation');
  formData.push(user.value);
  formData.push(email.value);
  formData.push(address.value);
  formData.push(city.value);
  formData.push(state.value);
  formData.push(zip.value);
  formData.push(adopterStatus);
  formData.push(pickupLocation.value);
  console.log(formData);

}