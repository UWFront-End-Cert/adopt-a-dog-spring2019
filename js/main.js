// **************** REFACTORED TO JQUERY ******************
// form page alert:
// document.addEventListener('submit', function(event) {
//
//   // get form data
//   // document.getElementById('checkoutForm').elements.value
//   const formValue = document.getElementById('checkoutForm').elements
//
//   // create array object
//   const formData = []
//
//   // loop over form elements and push values to array
//   for (let i = 0; i < formValue.length; i += 1) {
//     formData.push(formValue[i].value);
//   }
//   // log data for debugging
//   console.log(formData);
//
//   // alert form submitted
//   event.preventDefault();
//   alert('Thank you. The form information has been received');
// });



// create array for blogposts
const posts = [
  {
    title: 'Traveling With Your Dog',
    paragraph: 'You are doin me a concern long water shoob heck pupper fluffer maximum borkdrive long woofer pats, clouds heck extremely cuuuuuute shooberino smol. I am bekom fat super chub. The neighborhood pupper big ol pupper waggy wags bork ruff, wow very biscit yapper such treat heckin angery woofer, bork stop it fren ruff. Extremely cuuuuuute heckin you are doin me a concern, he made many woofs. Very hand that feed shibe most angery pupper I have ever seen heckin good boys and girls shibe, lotsa pats. Floofs doge lotsa pats very taste wow heck you are doin me a concern, heckin good boys and girls mlem wrinkler you are doin me a concern. Big ol pupper puggo maximum borkdrive puggorino thicc long water shoob, blop corgo blep shoob. Heckin good boys what a nice floof heck you are doin me a concern snoot what a nice floof many pats snoot heckin heck, heckin good boys tungg h*ck long doggo adorable doggo you are doin me a concern bork.',
    imgSource: 'images/blog-1.jpg',
    altText: 'A woman and her dog sitting at the grand canyon.'
  },
  {
    title: 'How to Walk Multiple Dogs',
    paragraph: 'You are doin me a concern long water shoob heck pupper fluffer maximum borkdrive long woofer pats, clouds heck extremely cuuuuuute shooberino smol. I am bekom fat super chub. The neighborhood pupper big ol pupper waggy wags bork ruff, wow very biscit yapper such treat heckin angery woofer, bork stop it fren ruff. Extremely cuuuuuute heckin you are doin me a concern, he made many woofs. Very hand that feed shibe most angery pupper I have ever seen heckin good boys and girls shibe, lotsa pats. Floofs doge lotsa pats very taste wow heck you are doin me a concern, heckin good boys and girls mlem wrinkler you are doin me a concern. Big ol pupper puggo maximum borkdrive puggorino thicc long water shoob, blop corgo blep shoob. Heckin good boys what a nice floof heck you are doin me a concern snoot what a nice floof many pats snoot heckin heck, heckin good boys tungg h*ck long doggo adorable doggo you are doin me a concern bork.',
    imgSource: 'images/blog-2.jpg',
    altText: 'A picture of four dogs obediently on leashes together.'
  },
  {
    title: 'Teach Your Dog to Fetch',
    paragraph: 'You are doin me a concern long water shoob heck pupper fluffer maximum borkdrive long woofer pats, clouds heck extremely cuuuuuute shooberino smol. I am bekom fat super chub. The neighborhood pupper big ol pupper waggy wags bork ruff, wow very biscit yapper such treat heckin angery woofer, bork stop it fren ruff. Extremely cuuuuuute heckin you are doin me a concern, he made many woofs. Very hand that feed shibe most angery pupper I have ever seen heckin good boys and girls shibe, lotsa pats. Floofs doge lotsa pats very taste wow heck you are doin me a concern, heckin good boys and girls mlem wrinkler you are doin me a concern. Big ol pupper puggo maximum borkdrive puggorino thicc long water shoob, blop corgo blep shoob. Heckin good boys what a nice floof heck you are doin me a concern snoot what a nice floof many pats snoot heckin heck, heckin good boys tungg h*ck long doggo adorable doggo you are doin me a concern bork.',
    imgSource: 'images/blog-3.jpg',
    altText: 'A photo of a girl playing fetch with her dog at sunset.'
  }
];

// generating blog posts:

// create a for loop
for (let i = 0; i < posts.length; i += 1) {
  const post = posts[i];

  // create a div element as a variable
  const cardDiv = document.createElement('div');
  cardDiv.className = "bloggo-card";

  // create img element
  const blogImg = document.createElement('IMG');
  blogImg.className = 'bloggoimg';
  blogImg.setAttribute('src', post.imgSource);
  blogImg.setAttribute('alt', post.altText);
  cardDiv.appendChild(blogImg);

  // create heading element
  const title = document.createElement('h4');
  title.textContent = post.title;
  cardDiv.appendChild(title);

  // create paragraph element
  const paragraph = document.createElement('P');
  paragraph.textContent = post.paragraph;
  cardDiv.appendChild(paragraph);

  // append all elements as a child of blogContainer
  document.getElementById("blogContainer").appendChild(cardDiv);
}
