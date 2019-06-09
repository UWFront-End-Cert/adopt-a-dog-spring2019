const blogPosts = [
    {
      headline: 'Traveling with your dog',
      imageLink: 'images/blog-1.jpg',
      imageDescription: 'A woman and her dog sit atop a canyon',
      blogText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed eros elit. Donec nisi ex, varius eget tortor molestie, vulputate aliquet justo. Fusce eu fringilla diam. Suspendisse interdum dictum mauris, eu bibendum nisi ullamcorper ac. Vivamus vestibulum ligula nec urna condimentum, non vehicula quam sagittis. Vestibulum congue varius enim quis elementum. Nulla finibus urna turpis, in pellentesque dui iaculis sit amet. Aliquam placerat neque quis odio venenatis egestas. Quisque fringilla eros eget quam accumsan, quis tempor metus rhoncus. Pellentesque nec lectus ut libero iaculis varius. Fusce nunc mauris, tincclassunt vel nulla vitae, dapibus lacinia quam. Integer at facilisis sapien. Etiam nec volutpat dui.'
    },
    {
      headline: 'How to Walk Multiple Dogs',
      imageLink: 'images/blog-2.jpg',
      imageDescription: 'Several dogs sit while on leashes in a park',
      blogText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed eros elit. Donec nisi ex, varius eget tortor molestie, vulputate aliquet justo. Fusce eu fringilla diam. Suspendisse interdum dictum mauris, eu bibendum nisi ullamcorper ac. Vivamus vestibulum ligula nec urna condimentum, non vehicula quam sagittis. Vestibulum congue varius enim quis elementum. Nulla finibus urna turpis, in pellentesque dui iaculis sit amet. Aliquam placerat neque quis odio venenatis egestas. Quisque fringilla eros eget quam accumsan, quis tempor metus rhoncus. Pellentesque nec lectus ut libero iaculis varius. Fusce nunc mauris, tincclassunt vel nulla vitae, dapibus lacinia quam. Integer at facilisis sapien. Etiam nec volutpat dui.'

    },
    {
      headline: 'Teach Your Dog To Fetch',
      imageLink: 'images/blog-3.jpg',
      imageDescription: 'At sunset, a woman holds a ball while an attentive dog watches',
      blogText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed eros elit. Donec nisi ex, varius eget tortor molestie, vulputate aliquet justo. Fusce eu fringilla diam. Suspendisse interdum dictum mauris, eu bibendum nisi ullamcorper ac. Vivamus vestibulum ligula nec urna condimentum, non vehicula quam sagittis. Vestibulum congue varius enim quis elementum. Nulla finibus urna turpis, in pellentesque dui iaculis sit amet. Aliquam placerat neque quis odio venenatis egestas. Quisque fringilla eros eget quam accumsan, quis tempor metus rhoncus. Pellentesque nec lectus ut libero iaculis varius. Fusce nunc mauris, tincclassunt vel nulla vitae, dapibus lacinia quam. Integer at facilisis sapien. Etiam nec volutpat dui.'

    }
  ];
  
  function addBlogPost(container, blogPost) {
    let article = document.createElement('article');
  
    let blogHeadline = document.createElement('h3');
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
