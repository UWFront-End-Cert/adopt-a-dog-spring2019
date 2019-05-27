const blogPosts = [
  {
    headline: 'Traveling with your dog',
    imageLink: 'images/blog-1.jpg',
    imageDescription: 'a girl with her dog sitting on a cliff',
    blogText: 'Cras sit amet purus nec felis dapibus tempus. Phasellus maximus metus ut tellus gravida, a pharetra ex posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam quis elit sapien. Donec nec sodales nulla. Praesent placerat tellus id tortor feugiat eleifend. Integer lacinia rhoncus diam faucibus sodales. Morbi posuere massa ac tempus pellentesque. Maecenas posuere vehicula nunc, sed bibendum massa tincidunt quis. Maecenas nec dignissim odio. Cras mollis magna nec lobortis bibendum. Aliquam ut felis sit amet risus aliquam pellentesque.'
  },
  {
    headline: 'How to Walk Multiple Dogs',
    imageLink: 'images/blog-2.jpg',
    imageDescription: 'multiple dogs on leashes',
    blogText: 'Cras sit amet purus nec felis dapibus tempus. Phasellus maximus metus ut tellus gravida, a pharetra ex posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam quis elit sapien. Donec nec sodales nulla. Praesent placerat tellus id tortor feugiat eleifend. Integer lacinia rhoncus diam faucibus sodales. Morbi posuere massa ac tempus pellentesque. Maecenas posuere vehicula nunc, sed bibendum massa tincidunt quis. Maecenas nec dignissim odio. Cras mollis magna nec lobortis bibendum. Aliquam ut felis sit amet risus aliquam pellentesque.'
  },
  {
    headline: 'Teach Your Dog To Fetch',
    imageLink: 'images/blog-3.jpg',
    imageDescription: 'a girl throwing a ball for her dog to catch',
    blogText: 'Cras sit amet purus nec felis dapibus tempus. Phasellus maximus metus ut tellus gravida, a pharetra ex posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam quis elit sapien. Donec nec sodales nulla. Praesent placerat tellus id tortor feugiat eleifend. Integer lacinia rhoncus diam faucibus sodales. Morbi posuere massa ac tempus pellentesque. Maecenas posuere vehicula nunc, sed bibendum massa tincidunt quis. Maecenas nec dignissim odio. Cras mollis magna nec lobortis bibendum. Aliquam ut felis sit amet risus aliquam pellentesque.'
  }
];

function addBlogPost(container, blogPost) {
  let article = document.createElement('article');

  let blogHeadline = document.createElement('h4');
  blogHeadline.textContent = blogPost.headline;
  article.appendChild(blogHeadline);

  let image = document.createElement('img');
  image.src = blogPost.imageLink;
  image.alt = blogPost.imageDescription;
  article.appendChild(image);

  let paragraph = document.createElement('p');
  paragraph.textContent = blogPost.blogText;
  article.appendChild(paragraph);

  container.appendChild(article);
}

const blogPostContainer = document.getElementById('blog-post-container');

blogPosts.forEach(function(blogPost, index) {
  addBlogPost(blogPostContainer, blogPost);
});
