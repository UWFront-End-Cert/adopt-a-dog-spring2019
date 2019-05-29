// creates objects for each blog post
const data = [{

  imgSrc: '../images/blog-1.jpg',
  imgAlt: 'Girl and black dog sitting on the edge of a canyon',
  title: 'Traveling With Your Dog',
  body: `<p>Doggo ipsum long woofer dat tungg tho very hand that feed shibe long
          water shoob vvv snoot, doge heck length boy. Very jealous pupper floofs
          heckin, he made many woofs. Doggorino very taste wow long water shoob
          shooberino floofs length boy, heckin good boys big ol pupper I am bekom
          fat. Boof very hand that feed shibe wow very biscit long bois yapper
          super chub shooberino, heckin good boys and girls corgo shoober big ol
          pupper borkdrive.</p>
        <br />
        <p>Extremely cuuuuuute fat boi you are doin me a concern borkf aqua doggo, doing
          me a frighten lotsa pats puggo, smol doge very hand that feed shibe. Mlem
          what a nice floof smol borking doggo with a long snoot for pats, boofers.
          Super chub tungg big ol sub woofer lotsa pats snoot, adorable doggo length
          boy puggo very hand that feed shibe. Blep doing me a frighten porgo wow very
          biscit, the neighborhood pupper.</p>`
}, {
  imgSrc: '../images/blog-2.jpg',
  imgAlt: 'four happy dogs on leashes sitting like good dogs',
  title: 'How to Walk Multiple Dogs',
  body: `<p>Doggo ipsum long woofer dat tungg tho very hand that feed shibe long
          water shoob vvv snoot, doge heck length boy. Very jealous pupper floofs
          heckin, he made many woofs. Doggorino very taste wow long water shoob
          shooberino floofs length boy, heckin good boys big ol pupper I am bekom
          fat. Boof very hand that feed shibe wow very biscit long bois yapper
          super chub shooberino, heckin good boys and girls corgo shoober big ol
          pupper borkdrive.</p>
        <br />
        <p>Extremely cuuuuuute fat boi you are doin me a concern borkf aqua doggo, doing
          me a frighten lotsa pats puggo, smol doge very hand that feed shibe. Mlem
          what a nice floof smol borking doggo with a long snoot for pats, boofers.
          Super chub tungg big ol sub woofer lotsa pats snoot, adorable doggo length
          boy puggo very hand that feed shibe. Blep doing me a frighten porgo wow very
          biscit, the neighborhood pupper.</p>`
}, {
  imgSrc: '../images/blog-3.jpg',
  imgAlt: 'sillouette of a girl playing with her dog in the sunset',
  title: 'Teach Your Dog to Fetch!',
  body: `<p>Doggo ipsum long woofer dat tungg tho very hand that feed shibe long
          water shoob vvv snoot, doge heck length boy. Very jealous pupper floofs
          heckin, he made many woofs. Doggorino very taste wow long water shoob
          shooberino floofs length boy, heckin good boys big ol pupper I am bekom
          fat. Boof very hand that feed shibe wow very biscit long bois yapper
          super chub shooberino, heckin good boys and girls corgo shoober big ol
          pupper borkdrive.</p>
        <br />
        <p>Extremely cuuuuuute fat boi you are doin me a concern borkf aqua doggo, doing
          me a frighten lotsa pats puggo, smol doge very hand that feed shibe. Mlem
          what a nice floof smol borking doggo with a long snoot for pats, boofers.
          Super chub tungg big ol sub woofer lotsa pats snoot, adorable doggo length
          boy puggo very hand that feed shibe. Blep doing me a frighten porgo wow very
          biscit, the neighborhood pupper.</p>`
}]

//creates template for data
function renderTemplate(blog) {
  const { imgSrc, imgAlt, title, body } = blog;
  return `
    <figure><img src=${imgSrc} alt="${imgAlt}"></figure>
    <article class="blog-text"><h2>${title}</h2>
    ${body}</article>`;
}

//adds h1 element
const heading = document.createElement('h1')
heading.innerHTML = 'Adoptadog Blog';
document.getElementById('main-content').appendChild(heading);

//creates div, inputs template, adds class for styling
data.forEach((item) => {
  const blogDiv = document.createElement('div');
  blogDiv.setAttribute('class', 'blog');
  blogDiv.innerHTML = renderTemplate(item);
  document.getElementById('main-content').appendChild(blogDiv);
})

let cartTotal = 0;

// describes dog when img is clicked
function dogDescription(name, attribute, price) {
  alert(`${name}, ${attribute}, $${price}`)
}

// calculates running total of price of all dogs in cart
function addToTotal(price) {
  cartTotal += price;
  alert(`Your cart total is: $${cartTotal}`);
  $('.total').text(`$${cartTotal}`);
}


$('form').submit(function (e) {
  e.preventDefault();
  // get all the inputs into an array.
  var $inputs = $('form :input');

  // get an associative array of just the values.
  var values = {};
  $inputs.each(function () {
    values[this.name] = $(this).val();
  });
  console.log(values);
});

$(document).ready(function () {
  $('button').hover(function () {
    $(this).toggleClass('active');
  });
});
