const blogs = [
  {
    title: 'Traveling With Your Dog',
    paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    imgSource: 'images/blog-1.jpg',
    altText: 'A woman hugging a dog looking at a canyon.'
  },
  {
    title: 'How to Walk Multiple Dogs',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imgSource: 'images/blog-2.jpg',
    altText: 'Picture of a pack of dogs leashed and ready to go on a walk.'
  },
  {
    title: 'Teach Your Dog to Fetch',
    paragraph:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    imgSource: 'images/blog-3.jpg',
    altText: 'A dog obediently sitting as owner holds ball.'
  }
];

for (let i = 0; i < blogs.length; i += 1) {
  const blog_post = blogs[i];
  const newDiv = document.createElement('div');
  newDiv.className = "top-section2";
  const pic = document.createElement('IMG');
  pic.className = 'top-image';
  pic.setAttribute('src', blog_post.imgSource);
  pic.setAttribute('alt', blog_post.altText);
  newDiv.appendChild(pic);
  const textDiv = document.createElement('div')
  textDiv.setAttribute('class', 'top-text')
  const title = document.createElement('h3');
  title.textContent = blog_post.title;
  textDiv.appendChild(title);
  const paragraph = document.createElement('P');
  paragraph.textContent = blog_post.paragraph;
  textDiv.appendChild(paragraph);
  newDiv.appendChild(textDiv);
  document.body.appendChild(newDiv);
}
