// Creating <article> and giving it a h2 title
const title = document.createElement('article');
title.innerHTML = '<h2>Traveling With Your Dog</h2>';

// Adding image and giving it a class of 'blog-image'
const image = document.createElement('IMG');
image.setAttribute('src', 'images/blog-1.jpg');
image.setAttribute('alt', 'Image of woman and her dog looking at the Grand Canyon.');
image.setAttribute('class', 'blog-image');

// Adding paragraph text
const post = document.createElement('p');
post.innerHTML = 'Doggo ipsum lotsa pats mlem heckin puggo, shoob woofer long bois what a nice floof, stop it fren shooberino. doggorino sub woofer h*ck. What a nice floof pupper extremely cuuuuuute, doggorino. I am bekom fat adorable doggo ur givin me a spook stop it fren wow such tempt noodle horse, blop doggorino you are doin me a concern super chub vvv, fat boi such treat extreme cuuuuuute bork. Yapper sub woofer h*ck yapper heckin smol borking doggo with a long snoot for pats, adorable doggo shooberino boof aqua doggo. I am bekom fat smol you are doing me a frighten very jealous pupper wow such tempt stop it fren, vvv shooberino smol.';

// Getting the ID=blog element
const el = document.getElementById('blog');
el.appendChild(image);
el.appendChild(title);
el.appendChild(post);
