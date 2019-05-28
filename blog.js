const blogpost = document.getElementById('blog-page');

let array = [];

const post1 = document.createElement('article');

post1.innerHTML =
    '<img class="blog-img" src="images/blog-1.jpg" alt="dog and girl grand canyon"><h3>Traveling With Your Dog</h3><p>Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.</p><p>Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor a abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.</p>';
post1.setAttribute('class','blog');

const post2 = document.createElement('article');

post2.innerHTML =
    '<img class="blog-img" src="images/blog-2.jpg" alt="Picture of several dogs on their leashes at the park"><h3>How to Walk Multiple Dogs</h3><p>Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.</p><p>Uptiusd andesci qui nem aut vendion ectur ? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.</p>';
post2.setAttribute('class', 'blog');


const post3 = document.createElement('article');

post3.innerHTML =
      '<img class="blog-img" src="images/blog-3.jpg" alt="Picture of a person about to throw a ball for their dog"><h3>Teach Your Dog To Fetch!</h3><p>Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.</p><p>Uptiusd andesci qui nem aut vendion ectur ? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.</p>';
post3.setAttribute('class', 'blog');

array.push(post1);
array.push(post2);
array.push(post3);

for (let i = 0; i < array.length; i++) {
        blogpost.appendChild(array[i]);
    }
