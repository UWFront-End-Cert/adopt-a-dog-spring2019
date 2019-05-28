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
const blogSection = document.getElementsByClassName('blog-main');
console.log(blogSection);

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

console.log(blogPostA);

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

console.log(blogPostB);

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

console.log(blogPostC);

