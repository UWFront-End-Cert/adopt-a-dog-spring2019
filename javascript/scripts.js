function dogDescription(name, breed, fee) {
    alert(name, breed, fee);
}

let cartTotal = 0;

function addToCart(fee) {
    cartTotal += fee;
    alert('Your total is: $' + cartTotal.toFixed(2));
    return  cartTotal;
}
