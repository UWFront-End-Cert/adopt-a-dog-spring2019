
const el = document.getElementById('blog-wrapper');

let blogArr = [];

const blogImage1 = document.createElement('div');
blogImage1.innerHTML = '<div class="blog-left"> <img class="blog-img" src="images/blog-1.jpg" alt="A photo of a woman hugging her dog overlooking the Grand Canyon."> </div>';

const blogPost1 = document.createElement('div');
blogPost1.innerHTML = '<div class="blog-right"> <h3>Traveling With Your Dog</h3> <p class="small">Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui of cae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.</p> <p class="small">Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.</p> </div>';


const blogImage2 = document.createElement('div');
blogImage2.innerHTML = '<div class="blog-left"> <img class="blog-img" src="images/blog-2.jpg" alt="A photo of four large dogs sitting in a park getting ready for a walk."> </div>';

const blogPost2 = document.createElement('div');
blogPost2.innerHTML = '<div class="blog-right"> <h3>How To Walk Multiple Dogs</h3> <p class="small">Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui of cae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.</p> <p class="small">Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.</p> </div>';


const blogImage3 = document.createElement('div');
blogImage3.innerHTML = '<div class="blog-left"> <img class="blog-img" src="images/blog-3.jpg" alt="A photo of a woman and a dog playing fetch on the beach at sunset."> </div>';

const blogPost3 = document.createElement('div');
blogPost3.innerHTML = '<div class="blog-right"> <h3>Teach Your Dog To Fetch!</h3> <p class="small">Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui of cae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.</p> <p class="small">Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.</p> </div>';


blogArr.push(blogImage1);
blogArr.push(blogPost1);
blogArr.push(blogImage2);
blogArr.push(blogPost2);
blogArr.push(blogImage3);
blogArr.push(blogPost3);


for (let i = 0; i < blogArr.length; i++) {
  el.appendChild(blogArr[i]);
}
