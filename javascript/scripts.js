function dogDescription(name, breed, fee) {
    alert(name, breed, fee);
}

let cartTotal = 0;

function addToCart(fee) {
    cartTotal += fee;
    alert(cartTotal);
    return cartTotal;
}

//checkout page

const form = document.querySelector('form');
const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');

submitButton.textContent = 'Submit';
form.appendChild(submitButton);

const name = document.getElementById('name');
const email = document.getElementById('email');
const address = document.getElementById('address');
const city = document.getElementById('city');
const state = document.getElementById('state');
const zip = document.getElementById('zip');
const yesFirst = document.getElementById('yes-first');
const noFirst = document.getElementById('no-first');
const pickupLocation = document.getElementById('pickup-location');


let customerInfo = [name, email, address, city, state, zip, yesFirst, noFirst, pickupLocation];

form.addEventListener('submit', function(event) {
    event.preventDefault();
    for ( i = 0; i < customerInfo.length; i +=1) {
        console.log(    customerInfo[i].value);
    }
    alert('Thank you. The form information has been received');
});


// blog page

const section = document.createElement('section');
const blogTitle = document.createElement('h2');
blogTitle.innerText = 'Adopt a Dog Blog';
blogTitle.setAttribute('class', 'blue-title');
document.getElementsByClassName("main-content-blog")[0].appendChild(blogTitle);
document.getElementsByClassName("main-content-blog")[0].appendChild(section);


//array containing blog post content

const blog = [
    {
        image: "./images/blog-1.jpg",
        alt: "a woman sitting on the ground overlooking the grand canyon with a black dog",
        title: "Traveling With Your Dog",
        p1: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
        p2: "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam."
    },
    {
        image: "./images/blog-2.jpg",
        alt: "several dogs sitting in a row",
        title: "How To Walk Multiple Dogs",
        p1: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
        p2: "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam."
    },
    {
        image: "./images/blog-3.jpg",
        alt: "A person and a dog playing with a ball at sunset",
        title: "Teach Your Dog To Fetch",
        p1: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
        p2: "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam." 
    }
];

//looping through array to dsiplay blog post content, in specific order for styling

for (let i = 0; i < blog.length; i += 1) {
    const blogContent = blog[i];

    const article = document.createElement('article');
    section.appendChild(article);
    article.setAttribute('class', 'blog');

    const image = document.createElement('img');
    image.setAttribute('src', blogContent.image, 'alt', blogContent.alt);
    document.getElementsByClassName("blog")[i].appendChild(image);

    const postContainer = document.createElement('div');
    article.appendChild(postContainer);
    postContainer.setAttribute('class', 'blog-post');

    const title = document.createElement('h3');
    title.textContent = blogContent.title;
    title.setAttribute('class', 'blue-title');

    const p1 = document.createElement('p');
    p1.textContent = blogContent.p1;

    const p2 = document.createElement('p');
    p2.textContent = blogContent.p2;

    
    document.getElementsByClassName("blog-post")[i].appendChild(title);
    document.getElementsByClassName("blog-post")[i].appendChild(p1);
    document.getElementsByClassName("blog-post")[i].appendChild(p2);
}


