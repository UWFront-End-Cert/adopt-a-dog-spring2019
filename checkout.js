const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thank you. The form information has been received");
  var divs = document.querySelectorAll('input');
  for (let i = 0; i < divs.length; ++i) {
    console.log(divs[i].value);
  }
});
