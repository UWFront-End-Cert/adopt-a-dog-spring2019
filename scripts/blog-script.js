
const blogPage = document.getElementById('container');

let blogContents = [];

//1st blog section
const blogSection1 = document.createElement('section');
blogSection1.setAttribute("class", "blog")

const blogSection1Image = document.createElement('IMG');
blogSection1Image.setAttribute("src", "images/blog-1.jpg");
blogSection1Image.setAttribute("alt", "Woman hugging dog on mountain top");
blogSection1Image.setAttribute("class", "intro-image");

const blogSection1Title = document.createElement('H3');
blogSection1Title.textContent = 'Traveling With Your Dog';

const blogSection1Blurb = document.createElement('P');
blogSection1Blurb.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

blogSection1.appendChild(blogSection1Image);
blogSection1.appendChild(blogSection1Title);
blogSection1.appendChild(blogSection1Blurb);

//2nd blog section
const blogSection2 = document.createElement('section');
blogSection2.setAttribute("class", "blog")

const blogSection2Image = document.createElement('IMG');
blogSection2Image.setAttribute("src", "images/blog-2.jpg");
blogSection2Image.setAttribute("alt", "Dogs on leashes barking");
blogSection2Image.setAttribute("class", "intro-image");

const blogSection2Title = document.createElement('H3');
blogSection2Title.textContent = 'How to Walk Multiple Dogs';

const blogSection2Blurb = document.createElement('P');
blogSection2Blurb.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

blogSection2.appendChild(blogSection2Image);
blogSection2.appendChild(blogSection2Title);
blogSection2.appendChild(blogSection2Blurb);

//3rd blog section
const blogSection3 = document.createElement('section');
blogSection3.setAttribute("class", "blog")

const blogSection3Image = document.createElement('IMG');
blogSection3Image.setAttribute("src", "images/blog-3.jpg");
blogSection3Image.setAttribute("alt", "Woman holding ball while dog sits");
blogSection3Image.setAttribute("class", "intro-image");

const blogSection3Title = document.createElement('H3');
blogSection3Title.textContent = 'Teach Your Dog to Fetch!';

const blogSection3Blurb = document.createElement('P');
blogSection3Blurb.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

blogSection3.appendChild(blogSection3Image);
blogSection3.appendChild(blogSection3Title);
blogSection3.appendChild(blogSection3Blurb);


blogContents.push(blogSection1);
blogContents.push(blogSection2);
blogContents.push(blogSection3);

for (let i = 0; i < blogContents.length; i++) {
  blogPage.appendChild(blogContents[i])
}















