let form = document.forms[0];
let selectName = document.querySelector('input[name="contactName"]');
let formName = selectName.value;
  console.log(formName);

function submitAlert() {
  alert('Thank you! The information has been received.');
}
