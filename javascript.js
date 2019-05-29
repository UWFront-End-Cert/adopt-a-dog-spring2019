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

let formValues = [];
let info = document.getElementsByTagName('input');

formValues.push(info.value);

console.log(formValues);

function submitForm() {
  alert('Thank you. The form information has been received');
}
