const postOne = document.createElement('div');
postOne.setAttribute('class', 'blog-post');
const imageOne = document.createElement('img');
imageOne.src = 'images/blog-1.jpg';
imageOne.alt = 'An owner with their dog sitting on a ledge of a cliff looking onto a canyon';
postOne.appendChild(imageOne);

const contentOne = document.createElement('content');
contentOne.class = 'blog-content';
postOne.appendChild(contentOne);

const titleOne = document.createElement('h4');
titleOne.textContent = 'Traveling With Your Dog';
contentOne.appendChild(titleOne);

const paraOne = document.createElement('p');
paraOne.textContent = 'Lorem ipsum dolor amet fashion axe beard hashtag lyft, keytar kickstarter franzen tattooed disrupt ipsum banjo tacos ennui roof party gentrify. Dreamcatcher locavore blog literally, waistcoat kombucha narwhal et food truck hoodie yuccie pariatur stumptown. Woke aliquip glossier butcher. Master cleanse food truck in street art. Farm-to-table authentic godard dolore cillum, slow-carb celiac. Pickled copper mug ad cred etsy swag. Excepteur activated charcoal lyft, tattooed small batch kickstarter disrupt tousled meh before they sold out direct trade exercitation seitan gastropub.';
contentOne.appendChild(paraOne);

const postTwo = document.createElement('div');
postTwo.setAttribute('class', 'blog-post');
const imageTwo = document.createElement('img');
imageTwo.src = 'images/blog-2.jpg';
imageTwo.alt = 'Four dogs attached to one leash, all looking forward owner that is out of frame';
postTwo.appendChild(imageTwo);

const contentTwo = document.createElement('content');
contentTwo.class = 'blog-content';
postTwo.appendChild(contentTwo);

const titleTwo = document.createElement('h4');
titleTwo.textContent = 'How To Walk Multiple Dogs';
contentTwo.appendChild(titleTwo);

const paraTwo = document.createElement('p');
paraTwo.textContent = 'Lorem ipsum dolor amet fashion axe beard hashtag lyft, keytar kickstarter franzen tattooed disrupt ipsum banjo tacos ennui roof party gentrify. Fanny pack coloring book intelligentsia la croix, offal fingerstache hot chicken retro tumblr id cillum cloud bread portland. Helvetica keytar gluten-free mollit you probably havent heard of them laboris try-hard health goth iPhone. Sunt lomo master cleanse skateboard normcore post-ironic occupy. Brunch lorem photo booth neutra banh mi.';
contentTwo.appendChild(paraTwo);

const postThree = document.createElement('div');
postThree.setAttribute('class', 'blog-post');
const imageThree = document.createElement('img');
imageThree.src = 'images/blog-3.jpg';
imageThree.alt = 'silhoutte of an owner holding a ball over their head in front of a sitting dog, all in front of a sunset';
postThree.appendChild(imageThree);

const contentThree = document.createElement('content');
contentThree.class = 'blog-content';
postThree.appendChild(contentThree);

const titleThree = document.createElement('h4');
titleThree.textContent = 'Teach Your Dog to Fetch';
contentThree.appendChild(titleThree);

const paraThree = document.createElement('p');
paraThree.textContent = 'Lorem ipsum dolor amet fashion axe beard hashtag lyft, keytar kickstarter franzen tattooed disrupt ipsum banjo tacos ennui roof party gentrify. Dreamcatcher locavore blog literally, waistcoat kombucha narwhal et food truck hoodie yuccie pariatur stumptown. Woke aliquip glossier butcher. Master cleanse food truck in street art. Farm-to-table authentic godard dolore cillum, slow-carb celiac. Pickled copper mug ad cred etsy swag. Excepteur activated charcoal lyft, tattooed small batch kickstarter disrupt tousled meh before they sold out direct trade exercitation seitan gastropub.';
contentThree.appendChild(paraThree);

const blogPage = document.getElementsByClassName('blog-page');
const blogPublish = [];

blogPublish.push(postOne);
blogPublish.push(postTwo);
blogPublish.push(postThree);

for (let i = 0; i < blogPublish.length; i++) {
  blogPage[0].appendChild(blogPublish[i]);
}
