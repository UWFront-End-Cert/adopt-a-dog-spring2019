let total = 0;

let dogs = {
  'Luna': {'breed' : 'Yellow Lab', 'price': 100.00},
  'George': {'breed' : 'Pug', 'price': 200.00},
  'Lucy': {'breed' : 'Golden Retriever', 'price': 300.00}
}

let blogs = [
  {
    'subheading' : 'Meet Oscar!',
    'message' : "We are now accepting applications for Oscar! Oscar is a Golden Retriever...",
    'img-src' : "images/home-intro.jpg"
  },
  {
    'subheading' : 'Meet Henry!',
    'message' : "We are now accepting applications for Henry! Henry is very loving..",
    'img-src' : "images/home-intro.jpg"
  },
  {
    'subheading' : 'Tilda!',
    'message' : "We are now accepting applications for Tilda! Tilda rocks!!~~~...",
    'img-src' : "images/home-intro.jpg"
  }
]


function getDogInfo(dog){
  alert(dog + ", " + dogs[dog]['breed'] + ", $" + dogs[dog]['price']);
}

function sumTotal(dog) {
  total += dogs[dog]['price'];
  $('#running-total').text('$' + total + ".00");
  alert("Your total is $" + total);
}

for (let i = 0; i < blogs.length; i++) {
  let entry = document.createElement('div');
  entry.setAttribute('class', 'highlight');

  let image = document.createElement('img');
  image.setAttribute('src', blogs[i]['img-src']);
  image.setAttribute('class', "high-dog");

  let description = document.createElement('div');
  description.setAttribute('class', "high-desc");

  let subheading = document.createElement('h3');
  subheading.textContent = blogs[i]['subheading'];

  let message = document.createElement('p');
  message.textContent = blogs[i]['message'];

  description.appendChild(subheading);
  description.appendChild(message);
  entry.appendChild(image);
  entry.appendChild(description);

  if (document.querySelector('.blogbody') != null) {
    document.querySelector('.blogbody').appendChild(entry);
  }
}

$('.dog-card').hover(function(e) {
  $('img', this).addClass('focus');
})
