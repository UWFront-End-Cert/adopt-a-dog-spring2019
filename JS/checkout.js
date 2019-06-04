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

function sConsole() {
    var data = document.getElementById("data");
    console.log(data.value);
}


  document.addEventListener('submit', function(event){
    event.preventDefault();
    alert('Thank you. The form information has been received');
  })
