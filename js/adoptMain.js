//  DOG CARD IMAGES  //
$('.dog-card').hover(function(e) {
  $('img', this).toggleClass('.image-hover');
})

$('.dog-card').hover(function(e) {
  $('button', this).addClass('.adopt-hover');
})

//  CART ALERT  //
let cartTotal = 0;
const dogsInCart = [];

function dogDescription(name, breed, cost) {
  alert(`This is ${name}, a ${breed} breed.  $${cost} to adopt!`);
}

function addToCart(dogCost) {
  cartTotal += dogCost;
  alert(`Your cart total is $${cartTotal.toFixed(2)}`);
  $('.cart-total').text(`$${cartTotal.toFixed(2)}`);
}


//  BLOG POSTS  //
const blogSection = document.getElementsByClassName('blog-main');

// 1st Post
const blogPostA = document.createElement('article');
blogPostA.setAttribute('class', 'blog-post');

const imageA = document.createElement('img');
imageA.setAttribute('src', './images/blog-1.jpg');
imageA.setAttribute('alt', 'Woman and dog sitting at the Grand Canyon');

const postAContent = document.createElement('div');
postAContent.setAttribute('class', 'blog-content');

const postATitle = document.createElement('h3');
postATitle.textContent = 'Traveling With Your Dog';

const postAPar = document.createElement('p');
postAPar.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const postAAside = document.createElement('aside');
postAAside.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

postAContent.appendChild(postATitle);
postAContent.appendChild(postAPar);
postAContent.appendChild(postAAside);

blogPostA.appendChild(imageA);
blogPostA.appendChild(postAContent);

// 2nd Post
const blogPostB = document.createElement('article');
blogPostB.setAttribute('class', 'blog-post');

const imageB = document.createElement('img');
imageB.setAttribute('src', './images/blog-2.jpg');
imageB.setAttribute('alt', 'Multiple dogs sitting, eagerly awaiting something');

const postBContent = document.createElement('div');
postBContent.setAttribute('class', 'blog-content');

const postBTitle = document.createElement('h3');
postBTitle.textContent = 'Traveling With Your Dog';

const postBPar = document.createElement('p');
postBPar.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const postBAside = document.createElement('aside');
postBAside.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

postBContent.appendChild(postBTitle);
postBContent.appendChild(postBPar);
postBContent.appendChild(postBAside);

blogPostB.appendChild(imageB);
blogPostB.appendChild(postBContent);

// 3rd Post
const blogPostC = document.createElement('article');
blogPostC.setAttribute('class', 'blog-post');

const imageC = document.createElement('img');
imageC.setAttribute('src', './images/blog-3.jpg');
imageC.setAttribute('alt', 'Multiple dogs sitting, eagerly awaiting something');

const postCContent = document.createElement('div');
postCContent.setAttribute('class', 'blog-content');

const postCTitle = document.createElement('h3');
postCTitle.textContent = 'Traveling With Your Dog';

const postCPar = document.createElement('p');
postCPar.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const postCAside = document.createElement('aside');
postCAside.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

postCContent.appendChild(postCTitle);
postCContent.appendChild(postCPar);
postCContent.appendChild(postCAside);

blogPostC.appendChild(imageC);
blogPostC.appendChild(postCContent);

//  Add to Blog Content Array
const blogContent = [];

blogContent.push(blogPostA);
blogContent.push(blogPostB);
blogContent.push(blogPostC);

//  Generate on page via for loop
for (let i = 0; i < blogContent.length; i++) {
  blogSection[0].appendChild(blogContent[i]);
}


//  CONSOLE LOG FORM DATA  //
// const form = document.getElementById('checkout-form');
// const submitButton = document.getElementById('submit');

// function submitForm() {
//   event.preventDefault();
//   alert('Thank you!  Your information has been received.');
//   let formInfo = [];
//   let name = document.getElementById('#name');
//   let email = document.getElementById('#email');
//   let address = document.getElementById('#address');
//   let city = document.getElementById('#city');
//   let state = document.getElementById('#state');
//   let zipcode = document.getElementById('#zipcode');
//   // let firstTimeAdopter = document.getElementById('');
//   let pickupLocation = document.getElementById('#pickup-location');
//   formInfo.push(name).value;
//   formInfo.push(email).value;
//   formInfo.push(address).value;
//   formInfo.push(city).value;
//   formInfo.push(state).value;
//   formInfo.push(zipcode).value;
//   formInfo.push(pickupLocation).value;
  
//   console.log(formInfo);
// }

// With jQuery
function submitForm() {
  event.preventDefault();
  alert(`Thank you!  Your information was received.`);
  const formInfo = [];
  let name = $('#name').val();
  let email = $('#email').val();
  let address = $('#address').val();
  let city = $('#city').val();
  let state = $('#state').val();
  let zipcode = $('#zipcode').val();
  // let firstTimeAdopter = document.getElementById('');
  let pickupLocation = $('#pickup-location').val();
  formInfo.push(name);
  formInfo.push(email);
  formInfo.push(address);
  formInfo.push(city);
  formInfo.push(state);
  formInfo.push(zipcode);
  formInfo.push(pickupLocation);
  console.log(formInfo);
}
