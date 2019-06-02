// Refactor using jQuery.

$('form').submit(function(e) {
  e.preventDefault();
  alert('Thank you! Your information has been logged.');
  console.log($('form').serialize());
})
