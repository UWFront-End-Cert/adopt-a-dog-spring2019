let total = 0;

function runningTotal(cost) {
      total += cost;
      alert(total);
  }

  const postTwo = document.createElement('article');
  postTwo.setAttribute('class', 'blog-post');

  const imageTwo = document.createElement('img');
  imageTwo.setAttribute('src', './images/blog-1.jpg');
  imageTwo.setAttribute('alt', 'Woman and dog sitting at the Grand Canyon');

  const contentTwo = document.createElement('content');
  contentTwo.setAttribute('class', 'blog-content');

  const titleTwo = document.createElement('h4');
  titleTwo.textContent = 'Traveling With Your Dog';

  const paraTwo = document.createElement('p');
  paraTwo.textContent = 'Lorem ipsum dolor amet fashion axe beard hashtag lyft, keytar kickstarter franzen tattooed disrupt ipsum banjo tacos ennui roof party gentrify. Dreamcatcher locavore blog literally, waistcoat kombucha narwhal et food truck hoodie yuccie pariatur stumptown. Woke aliquip glossier butcher. Master cleanse food truck in street art. Farm-to-table authentic godard dolore cillum, slow-carb celiac. Pickled copper mug ad cred etsy swag. Excepteur activated charcoal lyft, tattooed small batch kickstarter disrupt tousled meh before they sold out direct trade exercitation seitan gastropub.';

  postTwo.appendChild(imageTwo);
  postTwo.appendChild(contentTwo);
  contentTwo.appendChild(titleTwo);
  contentTwo.appendChild(paraTwo);


  // 2nd Post
  const blogPostB = document.createElement('article');
  blogPostB.setAttribute('class', 'blog-post');

  const imageB = document.createElement('img');
  imageB.setAttribute('src', './images/blog-2.jpg');
  imageB.setAttribute('alt', 'Multiple dogs sitting, eagerly awaiting something');

  const postBContent = document.createElement('div');
  postBContent.setAttribute('class', 'blog-content');

  const postBTitle = document.createElement('h4');
  postBTitle.textContent = 'Traveling With Your Dog';

  const postBPar = document.createElement('p');
  postBPar.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  postBContent.appendChild(postBTitle);
  postBContent.appendChild(postBPar);

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

  const postCTitle = document.createElement('h4');
  postCTitle.textContent = 'Traveling With Your Dog';

  const postCPar = document.createElement('p');
  postCPar.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  postCContent.appendChild(postCTitle);
  postCContent.appendChild(postCPar);

  blogPostC.appendChild(imageC);
  blogPostC.appendChild(postCContent);
