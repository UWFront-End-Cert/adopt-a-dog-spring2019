
function submitAlert() {

  let form = document.forms[0];

  let selectName = document.querySelector('input[name="contactName"]');
  let formName = selectName.value;
    console.log('Name: ' + formName);

  let selectEmail = document.querySelector('input[name="contactEmail"]');
  let formEmail = selectEmail.value;
    console.log('Email: ' + formEmail);

  let selectAddress = document.querySelector('input[name="contactStreet"]');
  let formAddress = selectAddress.value;
    console.log('Address: ' + formAddress);

  let selectCity = document.querySelector('input[name="contactCity"]');
  let formCity = selectCity.value;
    console.log('City: ' + formCity);

  let selectState = document.querySelector('select[name="contactState"]');
  let formState = selectState.value;
    console.log('State: ' + formState);

  let selectZIP = document.querySelector('input[name="contactZIP"]');
  let formZIP = selectZIP.value;
    console.log('ZIP code: ' + formZIP);

  let selectFirstTime = document.querySelector('input[name="firstTime"]:checked');
  let formFirstTime = selectFirstTime.value;
    console.log('First Time Adopter?: ' + formFirstTime);

  let selectPickupState = document.querySelector('select[name="pickupState"]');
  let formPickupState = selectPickupState.value;
    console.log('Pickup Location: ' + formPickupState);

  form.addEventListener('submit', function(e) {
    e.preventDefault();
  });

      alert('Thank you! The information has been received.');
}
