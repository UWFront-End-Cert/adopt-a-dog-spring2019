function dogInfo (name) {
    let result = name;
    alert(result);
  }

const cartTotal = $('#number')[0];
let total = 0;

  cartTotal.innerText = '$' + 0;

function adder() {
  total = total + 123.45;
  cartTotal.innerText = '$' + total;
  }

function submitForm() {
  event.preventDefault();
  let name = $('#name').val();
  let email = $("#email").val();
  let address = $("#address").val();
  let city = $("#city").val();
  let state = $("#state").val();
  let zip = $("#zip").val();

let submissions = [name, email, address, city, state, zip]
console.log(submissions);

alert('Thank you. The form information has been received');
};

$('.profile').hover(function(e) {
  $('img',this).toggleClass('box-shadow');
  });
