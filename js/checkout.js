function displayThankYou() {
  alert('Thank you. The form information has been received');
}

function getFormData() {
  let formFields = $('.input').serializeArray();
  let formData = '';
  $.each(formFields, function(i, field) {
    console.log(field.name + ': ' + field.value);
  })
}

$(document).ready(function() {
  $('#submit-button').click(function(e) {
    displayThankYou();
    getFormData();
    e.preventDefault();
  });
});
