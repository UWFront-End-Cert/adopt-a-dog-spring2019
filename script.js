let total = 0;

let dogs = {
  'Luna': {'breed' : 'Yellow Lab', 'price': 100.00},
  'George': {'breed' : 'Pug', 'price': 200.00},
  'Lucy': {'breed' : 'Golden Retriever', 'price': 300.00}
}


function getDogInfo(dog){
  alert(dog + ", " + dogs[dog]['breed'] + ", $" + dogs[dog]['price']);
}

function sumTotal(dog) {
  total += dogs[dog]['price'];
  alert("Your total is $" + total);
}
