
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

  form.addEventListener('submit', function(e) {
    e.preventDefault();
  });

      alert('Thank you! The information has been received.');
}
