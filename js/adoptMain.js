let cartTotal = 0;
// let dogCost = 0;
const dogsInCart = [];

function dogDescription(name, breed, cost) {
  alert(`This is ${name}, a ${breed} breed.  $${cost} to adopt!`)
}


//  CART  //
function addToCart(name, dogCost) {
  let check = dogsInCart.includes(name);
  if (check == false) {
    cartTotal += dogCost;
    alert(`Your cart total is $${cartTotal.toFixed(2)}`);
    dogsInCart.push(name);
    console.log(dogsInCart);
  } 
  else {
    alert(`You have already adopted ${name}.`);
  }
}

// function addToCart(dogCost) {
//   cartTotal += dogCost;
//   alert(`Your cart total is $${cartTotal.toFixed(2)}`);
// }


//  BLOG POSTS  //
const blogSection = document.getElementById('blog-main');

const blogContent = [];

// 1st Post
const blogPostA = document.createElement('article');
blogPostA.setAttribute('class', 'blog-post');

const imageA = document.createElement('img');
imageA.setAttribute('src', 'https://picsum.photos/200');
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