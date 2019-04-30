
function doggoInfo(name, breed, cost) {
  alert('Name: ' + name + '\n' + 'Breed: ' + breed + '\n' + 'Cost: ' + cost);
}

let total = 0

function doggoCost(cost) {
  total = total + Number(cost);
  alert('$ '+ total)
}
