let total = 0;

function alertDogInfo(name, breed, fee) {
    alert(name + ', ' + breed + ', $' + fee);
}

function addToTotal(fee) {
    total += fee;
    alert('Running total: $' + total);
}
