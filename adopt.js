// Function to alert dog info of name, breed, cost
function dogInfo(imgEl) {
  let parentArticleEl = imgEl.parentElement;
  let dogNameEl = parentArticleEl.querySelector(".dog-name");
  let dogBreedEl = parentArticleEl.querySelector(".breed");
  let dogAmountEl = parentArticleEl.querySelector(".amount");

    alert(dogNameEl.innerHTML + ', ' + dogBreedEl.innerHTML + ', ' + '$' + dogAmountEl.innerHTML);
}

// Function to alert the cost when click on Adopt button, and provide added running total
let totalPrice = 0;

function addCost(buttonEl) {
  let parentArticleEl = buttonEl.parentElement;
  let amountEl = parentArticleEl.querySelector(".amount");

  totalPrice = totalPrice + parseFloat(amountEl.innerHTML);

    $('#cart-total').replaceWith(' ' + '$' + totalPrice);

    alert(totalPrice);
}
