let total_cost = 0;
let used_dogs = [];

function contains(obj) {
    var i;
    for (i = 0; i < used_dogs.length; i += 1) {
        if (used_dogs[i] === obj) {
            return true;
        }
    }
    return false;
}
function cart_handler(i){
    if(contains(i)) {
        alert("Dog already in Cart");
        return;
    }
    else{
        used_dogs.push(i);
    }
    let cost_of_dog_str = document.getElementsByClassName("price")[i].innerHTML;
    let cost_of_dog_f = parseFloat(cost_of_dog_str.split("$")[1]);
    total_cost += cost_of_dog_f;
    //document.getElementById("cart_total").innerHTML = "$".concat(total_cost.toFixed(2).toString());
    $("#cart_total").html("$".concat(total_cost.toFixed(2).toString()));
    alert("Total: $" + total_cost.toFixed(2).toString());

}
