const el = document.getElementById('blog-intro');

let blogArr = [];

for (let i = 0; i < blogArr.length; i++) {
  el.appendChild(blogArr[i]);
}

const blogPic1 = document.createElement('div');
blogPic1.innerHTML = '<div class="blog-one">
<img class="blog-img" src="images/blog-1.jpg" alt="Woman wraps her arm around her black dog while sitting in a canyon.">
</div>';

const blogPost1 = document.createElement('div');
blogPost1.innerHTML = '<div class="blog-two">
<h2>Traveling With Your Dog</h2>
<p>Celadon Department Store Leech Life Pokemon, it's you and me Monferno Tympole Silcoon oh, you're my best friend.
</p>
</div>';

const blogPic2 = document.createElement('div');
blogImage2.innerHTML = '<div class="blog-one">
<img class="blog-img" src="images/blog-2.jpg" alt="Four tall dogs of varying breeds sit at attention facing the individual who is holding their leashes.">
</div>';

const blogPost2 = document.createElement('div');
blogPost2.innerHTML = '<div class="blog-two">
<h2>How To Walk Multiple Dogs</h2>
<p>Celadon Department Store Leech Life Pokemon, it's you and me Monferno Tympole Silcoon oh, you're my best friend.
</p>
</div>';

const blogPic3 = document.createElement('div');
blogImage3.innerHTML = '<div class="blog-one"> <img class="blog-img" src="images/blog-3.jpg" alt="A photo of a little girl holds up a ball in front of her sitting dog">
</div>';

const blogPost3 = document.createElement('div');
blogPost3.innerHTML = '<div class="blog-two">
<h2>Teach Your Dog To Fetch!</h2>
<p>Celadon Department Store Leech Life Pokemon, it's you and me Monferno Tympole Silcoon oh, you're my best friend.
</p>
</div>';

blogArr.push(blogPic1);
blogArr.push(blogPost1);
blogArr.push(blogPic2);
blogArr.push(blogPost2);
blogArr.push(blogPic3);
blogArr.push(blogPost3);
