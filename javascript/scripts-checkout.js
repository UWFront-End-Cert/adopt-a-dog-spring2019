//checkout page

const form = document.querySelector('form');
const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('class', 'adopt-button-checkout');

submitButton.textContent = 'Submit';
form.appendChild(submitButton);



form.addEventListener('submit', function(event) {

const name = document.getElementById('name');
const email = document.getElementById('email');
const address = document.getElementById('address');
const city = document.getElementById('city');
const state = document.getElementById('state');
const zip = document.getElementById('zip');
const adopter = adopt();
const pickupLocation = document.getElementById('pickup-location');

function adopt() {
    if (document.getElementById('yes-first').checked) {
        return document.getElementById('yes-first');
      }
    else if (document.getElementById('no-first').checked) {
        return document.getElementById('no-first');
    }
}

let customerInfo = [
    {
        title: 'name',
        value: name.value
    },
    {
        title: 'email',
        value: email.value
    },
    {
        title: 'address',
        value: address.value
    },
    {
        title: 'city',
        value: city.value
    },
    {
        title: 'state',
        value: state.value
    },
    {
        title: 'zip',
        value: zip.value
    },
    {
        title: 'first time adopter?',
        value: adopter.value
    },
    {
        title: 'pickup location?',
        value: pickupLocation.value
    }
];

    event.preventDefault();
    for ( i = 0; i < customerInfo.length; i +=1) {
        console.log(customerInfo[i].title + ': ' + customerInfo[i].value);
    }
    alert('Thank you. The form information has been received');

});
