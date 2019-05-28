const first = document.getElementById('first-post');
const second = document.getElementById('second-post');
const third = document.getElementById('third-post');
document.getElementById('section').removeChild(first);
document.getElementById('section').removeChild(second);
document.getElementById('section').removeChild(third);


const post = ['post1', 'post2', 'post3'];
for (let i = 0; i < post.length; i += 1) {
  const blogPic = document.createElement('img');
  blogPic.setAttribute('src', './images/blog-' + [i + 1] + '.jpg');
  blogPic.setAttribute('width', 200);
  blogPic.setAttribute('class', 'dynamic-pic');
  document.getElementById('section').appendChild(blogPic);

  const blogTitle = document.createElement('h2');
  blogTitle.textContent = 'Blog Post ' + [i + 1];
  blogTitle.setAttribute('class', 'dynamic-title');
  document.getElementById('section').appendChild(blogTitle);
  switch (blogTitle.textContent) {
    case 'Blog Post 1':
      blogTitle.textContent = 'Traveling with Your Dog';
      break;
    case 'Blog Post 2':
      blogTitle.textContent = 'How to Walk Multiple Dogs';
      break;
    case 'Blog Post 3':
      blogTitle.textContent = 'Teach Your Dog to Fetch!';
      break;
  }

  const blogText = document.createElement('p');
  blogText.textContent = 'Hotmail end of the road sitcoms playa floppy disk. Punk dope be kind rewind cut-off jean shorts hip hop, gordon bombay dotcom bubble rush hour bomber jacket miss cleo dsl. Track jackets beavis and butthead pogs toy story, berry lips puff daddy carlton dance eminem bop it. Lisa frank inflatable furniture hottie ford explorer slap bracelet skidz and zubas. Crimped hair game boy color armageddon instant messaging pop punk dennis rodman. Generation Y joey tribbiani bubble tape parting your hair down the middle, dolly the sheep netscape navigator necklaces with your name on a grain of rice. End of the road george michael yo quiero taco bell yo-yos accent braids, george clooney skip it be kind rewind bill clinton yo cut-off jean shorts. Nickelodeon keanu reeves dial-up eminem.';
  blogText.setAttribute('class', 'dynamic-text');
  document.getElementById('section').appendChild(blogText);
}

const imageStyles = document.querySelectorAll('.dynamic-pic');
for (let i = 0; i < imageStyles.length; i += 1) {
  imageStyles[i].style.width = '30%';
  imageStyles[i].style.margin = '2em 4em';
  imageStyles[i].style.float = 'left';
  imageStyles[i].style.clear = 'left';
 }

const titleStyles = document.querySelectorAll('.dynamic-title');
for (let i = 0; i < titleStyles.length; i += 1) {
  titleStyles[i].style.width = '50%';
  titleStyles[i].style.display = 'inline-block';
  titleStyles[i].style.float = 'right';
  titleStyles[i].style.margin = '2em 4em 1em 0';
}

const textStyles = document.querySelectorAll('.dynamic-text');
for(let i = 0; i < textStyles.length; i += 1) {
  textStyles[i].style.width = '50%';
  textStyles[i].style.display = 'inline-block';
  textStyles[i].style.margin = '3em 5.5em 3em 0';
  textStyles[i].style.lineHeight = '1.5em';
  textStyles[i].style.float = 'right';
}
