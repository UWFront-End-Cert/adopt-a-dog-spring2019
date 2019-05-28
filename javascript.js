function dogInfo () {
    alert();
  }

let total = 0;

  function adder(value) {
    let cost = 0;
    cost += value;
    total += value;
    alert('Grand total: ' + '$' + total)
  }

function submitValues() {
    console.log(document.getElementById('name').value);
    console.log(document.getElementById('email').value);
    console.log(document.getElementById('address').value);
    console.log(document.getElementById('city').value);
    console.log(document.getElementById('state').value);
    console.log(document.getElementById('zip').value);
    console.log(document.getElementById('location').value);
    console.log(document.getElementById('first_adoption').value);
  };

function submitForm() {
  alert('Thank you. The form information has been received');
}
