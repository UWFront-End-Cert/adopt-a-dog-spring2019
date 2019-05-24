
document.querySelector('form').addEventListener('submit', function(event) {
     event.preventDefault();
     var strText1 = document.getElementById("applicantName").value;
     var strText2 = document.getElementById("applicantEmail").value;
     var strText3 = document.getElementById("applicantAddress").value;
     var strText4 = document.getElementById("applicantCity").value;
     var strText5 = document.getElementById("applicantState").value;
     var strText6 = document.getElementById("applicantZip").value;
     var strText7 = document.firstTimeAdopter.newAdopter.value;
     var strText8 = document.getElementById("pickup").value;
     var result = strText1 + ' ' + strText2 + ' ' + strText3 + ' ' + strText4 + ' ' + strText5 + ' ' + strText6 + ' ' + strText7 + ' ' + strText8;
     console.log(result);
   });

document.querySelector('form').addEventListener('submit', function(event) {
     event.preventDefault();
     alert('Thank you. \nThe form information has been received.');
   });
