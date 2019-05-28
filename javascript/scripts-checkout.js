//checkout page

const form = document.querySelector('form');
const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('class', 'adopt-button-checkout');

submitButton.textContent = 'Submit';
form.appendChild(submitButton);

const name = document.getElementById('name');
const email = document.getElementById('email');
const address = document.getElementById('address');
const city = document.getElementById('city');
const state = document.getElementById('state');
const zip = document.getElementById('zip');
const yesFirst = document.getElementById('yes-first');
const noFirst = document.getElementById('no-first');
const pickupLocation = document.getElementById('pickup-location');


let customerInfo = [name, email, address, city, state, zip, yesFirst, noFirst, pickupLocation];

form.addEventListener('submit', function(event) {
    event.preventDefault();
    for ( i = 0; i < customerInfo.length; i +=1) {
        console.log(customerInfo[i].value);
    }
    alert('Thank you. The form information has been received');
});
