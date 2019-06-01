function info(name, breed) {
    let result = name + ', ' + breed + ', $123.45';
    alert(result);
  }

const numberToDisplay = $( "#displayTotal" )[0];

let count = 0;

numberToDisplay.innerText = 0;

function addTotal() {
  count = count + 123.45;
  numberToDisplay.innerText = count;
}


/*I removed the pop-up window with the total once we added the running cart total in the top right
let total = 0;
  
function adder(value) {
    let innerTotal = 0;
    innerTotal += value;
    total += value;
    alert(total)
}
*/

function thankYou() {
  event.preventDefault();
  let name = $('#name').val();
  let email = $("#email").val();
  let street = $("#street").val();
  let city = $("#city").val();
  let state = $("#state").val();
  let zip = $("#zip").val();
  let pickup = $("#pickup").val();
  const formDataContacts = document.querySelector('form').elements.firstadopt;

  for (var i = 0; i < formDataContacts.length; i++) {
      if (formDataContacts[i].checked);
    }

  let myArr = [name, email, street, city, state, zip, formDataContacts[i].value, pickup]
  console.log(myArr);
  
  
  alert("Thank you. The form information has been received.");
}

$ ('.profile-card').hover(function(e) {
  $('img', this).addClass('hover-picture');
})

 //$('#name') is correctly catching that field. I can turn it pink.