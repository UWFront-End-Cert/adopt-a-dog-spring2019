function submitForm() {
  const form = document.querySelector('form');

  alert('Thank you. The form information has been received.');
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let street = document.getElementById('street');
  let city = document.getElementById('city');
  let state = document.getElementById('state');
  let zip = document.getElementById('zip');
  let adoptStatus = document.getElementById('adopt-status');
  let pickupLocation = document.getElementById('pickup-location');

  const formInfo = [];

  formInfo.push(name.value);
  formInfo.push(email.value);
  formInfo.push(street.value);
  formInfo.push(city.value);
  formInfo.push(state.value);
  formInfo.push(zip.value);
  formInfo.push(pickupLocation.value);

  console.log(formInfo);
}
