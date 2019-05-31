
function submitAlert() {

    let form = document.forms[0];

  let formName = $('form input[name=contactName]').val();
    console.log('Name: ' + formName);

  let formEmail = $('form input[name=contactEmail]').val();
    console.log('Email: ' + formEmail);

  let formAddress = $('form input[name=contactEmail]').val();
    console.log('Address: ' + formAddress);

  let formCity = $('form input[name=contactCity]').val();
    console.log('City: ' + formCity);

  let formState = $('form select[name=contactState]').val();
    console.log('State: ' + formState);

  let formZIP = $('form input[name=contactZIP]').val();
    console.log('ZIP Code: ' + formZIP);

  let formFirstTime = $('form input[name=firstTime]:checked').val();
    console.log('First Time Adopter?: ' + formFirstTime);

  let formPickupState = $('form select[name=pickupState]').val();
    console.log('Pickup Location?: ' + formPickupState);

    form.addEventListener('submit', function(e) {
      e.preventDefault();
    });

        alert('Thank you! The information has been received.');
  }

// Original JavaScript code from Lesson 8 commented out but kept for historical purposes (and reference later)
//   let form = document.forms[0];
//
//   let selectName = document.querySelector('input[name="contactName"]');
//   let formName = selectName.value;
//     console.log('Name: ' + formName);
//
//   let selectEmail = document.querySelector('input[name="contactEmail"]');
//   let formEmail = selectEmail.value;
//     console.log('Email: ' + formEmail);
//
//   let selectAddress = document.querySelector('input[name="contactStreet"]');
//   let formAddress = selectAddress.value;
//     console.log('Address: ' + formAddress);
//
//   let selectCity = document.querySelector('input[name="contactCity"]');
//   let formCity = selectCity.value;
//     console.log('City: ' + formCity);
//
//   let selectState = document.querySelector('select[name="contactState"]');
//   let formState = selectState.value;
//     console.log('State: ' + formState);
//
//   let selectZIP = document.querySelector('input[name="contactZIP"]');
//   let formZIP = selectZIP.value;
//     console.log('ZIP Code: ' + formZIP);
//
//   let selectFirstTime = document.querySelector('input[name="firstTime"]:checked');
//   let formFirstTime = selectFirstTime.value;
//     console.log('First Time Adopter?: ' + formFirstTime);
//
//   let selectPickupState = document.querySelector('select[name="pickupState"]');
//   let formPickupState = selectPickupState.value;
//     console.log('Pickup Location: ' + formPickupState);
