//const amountToDisplay = document.getElementById('cartTotal');
let price = 0;

//amountToDisplay.innerText = 0;

//function addPrice(data) {

//    price = price + data;

//    result = ("$" + price);

//    amountToDisplay.innerText = result;


//  }

function addPrice(data) {

    price = price + data;

    result= ("$" + price);

    alert(result);
}

//function sConsole() {
//    var data = document.getElementById("data");
//    console.log(data.value);
//}


//  document.addEventListener('submit', function(event){
//    event.preventDefault();
//    alert('Thank you. The form information has been received');
//  })

//document.querySelector('form').addEventListener('submit', function(e) {
//  e.preventDefault();

//  const formData = document.querySelector('form');
//  const formDataContacts = document.getElementById('sub-form').elements.contact;

//  for (let i = 0; i < formData.elements.length; i++) {
//    console.log(formData.elements[i].value)
//  }
//  for (var i = 0; i < formDataContacts.length; i++) {
//    if (formDataContacts[i].checked) {
//      console.log(formDataContacts[i].value);
//    }
//  }
//});

document.addEventListener('submit', function(event){
    event.preventDefault();
    alert('Thank you. The form information has been received');
  })

$('form').click('submit', function(e) {
  e.preventDefault();

  const formData = document.querySelector('form');
  const formDataContacts = document.getElementById('sub-form').elements.contact;

  for (let i = 0; i < formData.elements.length; i++) {
    console.log(formData.elements[i].value)
  }

});
