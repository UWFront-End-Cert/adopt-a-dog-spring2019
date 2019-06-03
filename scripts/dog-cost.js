


const numberToDisplay = document.getElementById('displayCost');
let count = 0;

numberToDisplay.innerText = '$0.00';

function countUp() {
  count = count + 123.45;
  alert("Your total is now $" + count.toFixed(2))
  numberToDisplay.innerText = '$' + count.toFixed(2);
}
