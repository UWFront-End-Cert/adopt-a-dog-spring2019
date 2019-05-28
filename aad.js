function info(name, breed) {
    let result = name + ', ' + breed + ', $123.45';
    alert(result);
  }

let total = 0;
  
function adder(value) {
    let innerTotal = 0;
    innerTotal += value;
    total += value;
    alert(total)
}

function thankYou() {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let street = document.getElementById("street").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;
  let zip = document.getElementById("zip").value;
  let pickup = document.getElementById("pickup").value;
  let myArr = [name, email, street, city, state, zip, pickup]
  console.log(myArr);
  const formDataContacts = document.querySelector('form').elements.firstadopt;
  for (var i = 0; i < formDataContacts.length; i++) {
    if (formDataContacts[i].checked) {
      console.log(formDataContacts[i].value);
    }
  }
  alert("Thank you. The form information has been received.");
}
