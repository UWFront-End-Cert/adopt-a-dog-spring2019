// Blog post1 for "Traveling With Your Dog"
const blogPost1 = document.createElement('ARTICLE');
blogPost1.setAttribute('id', 'article1');
document.body.appendChild(blogPost1);

let image1 = document.createElement('IMG');
image1.setAttribute('src', 'images/blog-1.jpg');
image1.setAttribute('alt', 'Image of woman and her dog looking at the Grand Canyon.');
image1.setAttribute('class', 'blog-image');
document.getElementById('article1').appendChild(image1);

let title1 = document.createElement('H2');
let titleText1 = document.createTextNode('Traveling With Your Dog');
title1.appendChild(titleText1);
document.getElementById('article1').appendChild(title1);

let post1 = document.createElement('P');
let postText1 = document.createTextNode('Doggo ipsum lotsa pats mlem heckin puggo, shoob woofer long bois what a nice floof, stop it fren shooberino. doggorino sub woofer h*ck. What a nice floof pupper extremely cuuuuuute, doggorino. I am bekom fat adorable doggo ur givin me a spook stop it fren wow such tempt noodle horse, blop doggorino you are doin me a concern super chub vvv, fat boi such treat extreme cuuuuuute bork. Yapper sub woofer h*ck yapper heckin smol borking doggo with a long snoot for pats, adorable doggo shooberino boof aqua doggo. I am bekom fat smol you are doing me a frighten very jealous pupper wow such tempt stop it fren, vvv shooberino smol.');
post1.appendChild(postText1);
document.getElementById('article1').appendChild(post1);

// Blog post2 for "How To Walk Multiple Dogs"
const blogPost2 = document.createElement('ARTICLE');
blogPost2.setAttribute('id', 'article2');
document.body.appendChild(blogPost2);

let image2 = document.createElement('IMG');
image2.setAttribute('src', 'images/blog-2.jpg');
image2.setAttribute('alt', 'Image of multiple dogs on leashes');
image2.setAttribute('class', 'blog-image');
document.getElementById('article2').appendChild(image2);

let title2 = document.createElement('H2');
let titleText2 = document.createTextNode('How To Walk Multiple Dogs');
title2.appendChild(titleText2);
document.getElementById('article2').appendChild(title2);

let post2 = document.createElement('P');
let postText2 = document.createTextNode('Doggo ipsum lotsa pats mlem heckin puggo, shoob woofer long bois what a nice floof, stop it fren shooberino. doggorino sub woofer h*ck. What a nice floof pupper extremely cuuuuuute, doggorino. I am bekom fat adorable doggo ur givin me a spook stop it fren wow such tempt noodle horse, blop doggorino you are doin me a concern super chub vvv, fat boi such treat extreme cuuuuuute bork. Yapper sub woofer h*ck yapper heckin smol borking doggo with a long snoot for pats, adorable doggo shooberino boof aqua doggo. I am bekom fat smol you are doing me a frighten very jealous pupper wow such tempt stop it fren, vvv shooberino smol.');
post2.appendChild(postText2);
document.getElementById('article2').appendChild(post2);

// Blog post for "Teach Your Dog To Fetch!"
const blogPost3 = document.createElement('ARTICLE');
blogPost3.setAttribute('id', 'article3');
document.body.appendChild(blogPost3);

let image3 = document.createElement('IMG');
image3.setAttribute('src', 'images/blog-3.jpg');
image3.setAttribute('alt', 'Silouette image of owner throwing for dog.');
image3.setAttribute('class', 'blog-image');
document.getElementById('article3').appendChild(image3);

let title3 = document.createElement('H2');
let titleText3 = document.createTextNode('Teach Your Dog To Fetch!');
title3.appendChild(titleText3);
document.getElementById('article3').appendChild(title3);

let post3 = document.createElement('P');
let postText3 = document.createTextNode('Doggo ipsum lotsa pats mlem heckin puggo, shoob woofer long bois what a nice floof, stop it fren shooberino. doggorino sub woofer h*ck. What a nice floof pupper extremely cuuuuuute, doggorino. I am bekom fat adorable doggo ur givin me a spook stop it fren wow such tempt noodle horse, blop doggorino you are doin me a concern super chub vvv, fat boi such treat extreme cuuuuuute bork. Yapper sub woofer h*ck yapper heckin smol borking doggo with a long snoot for pats, adorable doggo shooberino boof aqua doggo. I am bekom fat smol you are doing me a frighten very jealous pupper wow such tempt stop it fren, vvv shooberino smol.');
post3.appendChild(postText3);
document.getElementById('article3').appendChild(post3);

// Display all the blogPost articles as children of section ID=blog
const el = document.getElementById('blog');
el.appendChild(article1);
el.appendChild(article2);
el.appendChild(article3);
