

//blog page//



const blog = document.createElement('div');

var blogblock = document.getElementById('grid')

let blogArr = [];

const blog1 = document.createElement('div')

blog1.setAttribute('class','grid-container-blog');

//blog1

const newBlog1img = document.createElement ('img');

newBlog1img.src = "images/blog-1.jpg";

newBlog1img.setAttribute('class','blog-img');

const newBlog1 = document.createElement('div');

newBlog1.innerHTML = '<h2>Traveling With Your Dog</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse velit dolor, mollis at lorem sed, efficitur feugiat leo. Etiam blandit tristique lacus vitae ultricies. Aliquam eros ipsum, auctor a sodales vel, accumsan ac magna. Aenean commodo faucibus metus, ut semper urna auctor eu. In volutpat sapien id lacus mollis, ac pellentesque nisi egestas. Sed ac tortor sit amet nibh fringilla venenatis. Donec vitae pulvinar diam. Curabitur finibus gravida maximus. Integer gravida sodales nisi, at viverra dui vulputate a. In malesuada ex et eros vehicula commodo. Sed porttitor eget massa vel egestas.</p><p>Integer semper eleifend commodo. Nullam vitae tristique enim, in gravida velit. Morbi eros massa, mollis id odio a, eleifend aliquam arcu. Aenean euismod tortor tellus. Ut efficitur lorem ut lacus auctor elementum. Sed luctus cursus ultricies. Phasellus at magna neque. Nam nunc tellus, maximus semper hendrerit at, interdum eu ex. Praesent vitae sapien sed quam cursus aliquam. Sed elementum, ante eget viverra convallis, metus sapien luctus elit, in interdum leo purus dignissim dui. Phasellus sed lorem nec nisi cursus feugiat. Duis mauris lacus, sollicitudin suscipit laoreet in, lacinia ac ipsum. Ut condimentum neque nec est viverra blandit ut id ligula. Sed luctus id ligula sed fermentum. </p>';

newBlog1.setAttribute('class','blog-des');

//blog2

const newBlog2img = document.createElement ('img');

newBlog2img.src = "images/blog-2.jpg";

newBlog2img.setAttribute('class','blog-img');

const newBlog2 = document.createElement('div');

newBlog2.innerHTML = '<h2>How to Walk Multiple Dogs</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse velit dolor, mollis at lorem sed, efficitur feugiat leo. Etiam blandit tristique lacus vitae ultricies. Aliquam eros ipsum, auctor a sodales vel, accumsan ac magna. Aenean commodo faucibus metus, ut semper urna auctor eu. In volutpat sapien id lacus mollis, ac pellentesque nisi egestas. Sed ac tortor sit amet nibh fringilla venenatis. Donec vitae pulvinar diam. Curabitur finibus gravida maximus. Integer gravida sodales nisi, at viverra dui vulputate a. In malesuada ex et eros vehicula commodo. Sed porttitor eget massa vel egestas.</p><p>Integer semper eleifend commodo. Nullam vitae tristique enim, in gravida velit. Morbi eros massa, mollis id odio a, eleifend aliquam arcu. Aenean euismod tortor tellus. Ut efficitur lorem ut lacus auctor elementum. Sed luctus cursus ultricies. Phasellus at magna neque. Nam nunc tellus, maximus semper hendrerit at, interdum eu ex. Praesent vitae sapien sed quam cursus aliquam. Sed elementum, ante eget viverra convallis, metus sapien luctus elit, in interdum leo purus dignissim dui. Phasellus sed lorem nec nisi cursus feugiat. Duis mauris lacus, sollicitudin suscipit laoreet in, lacinia ac ipsum. Ut condimentum neque nec est viverra blandit ut id ligula. Sed luctus id ligula sed fermentum. </p>';

newBlog2.setAttribute('class','blog-des');

//blog3

const newBlog3img = document.createElement ('img');

newBlog3img.src = "images/blog-3.jpg";

newBlog3img.setAttribute('class','blog-img');

const newBlog3 = document.createElement('div');

newBlog3.innerHTML = '<h2>Teach Your Dog To Fetch!</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse velit dolor, mollis at lorem sed, efficitur feugiat leo. Etiam blandit tristique lacus vitae ultricies. Aliquam eros ipsum, auctor a sodales vel, accumsan ac magna. Aenean commodo faucibus metus, ut semper urna auctor eu. In volutpat sapien id lacus mollis, ac pellentesque nisi egestas. Sed ac tortor sit amet nibh fringilla venenatis. Donec vitae pulvinar diam. Curabitur finibus gravida maximus. Integer gravida sodales nisi, at viverra dui vulputate a. In malesuada ex et eros vehicula commodo. Sed porttitor eget massa vel egestas.</p><p>Integer semper eleifend commodo. Nullam vitae tristique enim, in gravida velit. Morbi eros massa, mollis id odio a, eleifend aliquam arcu. Aenean euismod tortor tellus. Ut efficitur lorem ut lacus auctor elementum. Sed luctus cursus ultricies. Phasellus at magna neque. Nam nunc tellus, maximus semper hendrerit at, interdum eu ex. Praesent vitae sapien sed quam cursus aliquam. Sed elementum, ante eget viverra convallis, metus sapien luctus elit, in interdum leo purus dignissim dui. Phasellus sed lorem nec nisi cursus feugiat. Duis mauris lacus, sollicitudin suscipit laoreet in, lacinia ac ipsum. Ut condimentum neque nec est viverra blandit ut id ligula. Sed luctus id ligula sed fermentum. </p>';

newBlog3.setAttribute('class','blog-des');



blogArr.push(blog1);
blogArr.push(newBlog1img);
blogArr.push(newBlog1);
blogArr.push(newBlog2img);
blogArr.push(newBlog2);
blogArr.push(newBlog3img);
blogArr.push(newBlog3);

for (let i = 0; i < blogArr.length; i++) {
  blogblock.appendChild(blogArr[i]);
}
