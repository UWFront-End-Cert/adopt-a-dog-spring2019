const blogArticles = [
    {
      header: 'Traveling with your dog',
      image: 'images/blog-1.jpg',
      imgAlt: 'Girl and dog sitting on a canyon ledge',
      text: `<p>Doggo ipsum dat tungg tho doggorino maximum borkdrive, yapper. Thicc what a nice floof very hand that feed shibe puggo
          snoot borking doggo, puggorino ur givin me a spook noodle horse. Dat tungg tho extremely cuuuuuute most angery pupper
          I have ever seen wrinkler tungg most angery pupper I have ever seen, doggo heck wrinkler.</p>
          <p>Doggo ipsum dat tungg tho doggorino maximum borkdrive, yapper. Thicc what a nice floof very hand that feed shibe puggo
          snoot borking doggo, puggorino ur givin me a spook noodle horse. Dat tungg tho extremely cuuuuuute most angery pupper
          I have ever seen wrinkler tungg most angery pupper I have ever seen, doggo heck wrinkler.</p>`

    },
    {
      header: 'How to Walk Multiple Dogs',
      image: 'images/blog-2.jpg',
      imgAlt: 'Four dogs on leashes looking at their handler',
      text: `<p>Doggo ipsum dat tungg tho doggorino maximum borkdrive, yapper. Thicc what a nice floof very hand that feed shibe puggo
          snoot borking doggo, puggorino ur givin me a spook noodle horse. Dat tungg tho extremely cuuuuuute most angery pupper
          I have ever seen wrinkler tungg most angery pupper I have ever seen, doggo heck wrinkler.</p>
          <p>Doggo ipsum dat tungg tho doggorino maximum borkdrive, yapper. Thicc what a nice floof very hand that feed shibe puggo
          snoot borking doggo, puggorino ur givin me a spook noodle horse. Dat tungg tho extremely cuuuuuute most angery pupper
          I have ever seen wrinkler tungg most angery pupper I have ever seen, doggo heck wrinkler.</p>`

    },
    {
      header: 'Teach Your Dog To Fetch',
      image: 'images/blog-3.jpg',
      imgAlt: 'Silhouette of a girl playing with her dog',
      text: `<p>Doggo ipsum dat tungg tho doggorino maximum borkdrive, yapper. Thicc what a nice floof very hand that feed shibe puggo
          snoot borking doggo, puggorino ur givin me a spook noodle horse. Dat tungg tho extremely cuuuuuute most angery pupper
          I have ever seen wrinkler tungg most angery pupper I have ever seen, doggo heck wrinkler.</p>
          <p>Doggo ipsum dat tungg tho doggorino maximum borkdrive, yapper. Thicc what a nice floof very hand that feed shibe puggo
          snoot borking doggo, puggorino ur givin me a spook noodle horse. Dat tungg tho extremely cuuuuuute most angery pupper
          I have ever seen wrinkler tungg most angery pupper I have ever seen, doggo heck wrinkler.</p>`

    }
  ];

function addBlogArticles(container, blogArticles) {
let dev = document.createElement('dev');

let mainHeader = document.createElement('h2')
mainHeader.innerHTML = 'Adoptadog Blog';
document.getElementById('blog-section').appendChild(mainHeader);

let image = document.createElement('img');
image.src = blogArticles.image;
image.alt = blogArticles.imageAlt;
dev.appendChild(image);

let blogHeader = document.createElement('h2');
 blogHeader.textContent = blogArticles.header;
 dev.appendChild(blogHeader);

 let paragraph = document.createElement('p');
  paragraph.text = blogArticles.text;
  dev.appendChild(paragraph);

  container.appendChild(dev);
  }

  const blogSection = document.getElementById('blog-section');

  blogArticles.forEach(function(blogArticles) {
    addBlogArticles(blogSection, blogArticles);
  });
