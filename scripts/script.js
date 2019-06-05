//index.html & dogs.html click handlers for DOG PHOTOS

/*function info(name, breed) {
	let result = name + ', ' + breed + ', $123.45';
}
*/

function murphyInfo() {
		alert("Murphy, Beagle, $123.45");
}

function poppyInfo() {
		alert("Poppy, Shih Tzu, $123.45");
}

function jackInfo() {
		alert("Jack, Jack Russel Terrier, $123.45");
}

function duffyInfo() {
		alert("Duffy, Pitbull, $123.45");
}

function lucasInfo() {
		alert("Lucas, Beagle, $123.45");
}

function jakeInfo() {
		alert("Jake, Labrador, $123.45");
}

function angusInfo() {
		alert("Angus, Boxer, $123.45");
}

function violetInfo() {
		alert("Violet, Chocolate Labrador, $123.45");
}

function piperInfo() {
		alert("Piper, Chocolate Labrador, $123.45");
}

function maximusInfo() {
		alert("Maximus, Chocolate Labrador, $123.45");
}

function lunaInfo() {
		alert("Luna, Labrador, $123.45");
}

function stellaInfo() {
		alert("Violet, Chihuahua, $123.45");
}

//index.html & dogs.html click handlers for ADOPT BUTTONS
let total = 0;

function adoptAlert() {
	total += 123.45;
	alert('This dog has been added to your cart. Total: $' + total);
}

//More buttons
function buttonMore () {
	var dots = document.getElementById("initial-dog-cards");
	var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

//Generate blog posts dynamically

const el = document.getElementsByClassName('blog-grid');

let blogArr = [];

//Blog Entry 1
const blogEntry1 = document.createElement('div');
blogEntry1.innerHTML = '<h1>Entry 1</h1>'; //FOR Header
blogEntry1.setAttribute('class', 'entry'); //FOR CSS

console.log(blogEntry1); //Is everything working

const blogEntry1Img = document.createElement('img');
blogEntry1Img.setAttribute('src', 'images/blog-1.jpg');
blogEntry1Img.setAttribute("alt", "girl with dog overlooking the Grand Canyon");
blogEntry1Img.setAttribute('class', 'blog-picture');

const blogEntry1Header = document.createElement('h3');
blogEntry1Header.textcontent = 'Lorem Ipsum';

const blogEntry1Content = document.createElement('p');
blogEntry1Content.textcontent = "Lorem ipsum";
blogEntry1Img.setAttribute('class', 'blog-text');

blogEntry1.appendChild(blogEntry1Img);
blogEntry1.appendChild(blogEntry1Header);
blogEntry1.appendChild(blogEntry1Content);

//Blog Entry 2
const blogEntry2 = document.createElement('div');
blogEntry2.innerHTML = '<h1>Entry 2</h1>';
blogEntry2.setAttribute('class', 'entry');

console.log(blogEntry2);

const blogEntry2Img = document.createElement('img');
blogEntry2Img.setAttribute('src', 'images/blog-2.jpg');
blogEntry2Img.setAttribute("alt", "group of dogs being walked");
blogEntry2Img.setAttribute('class', 'blog-picture');

const blogEntry2Header = document.createElement('h3');
blogEntry2Header.textcontent = 'Lorem Ipsum';

const blogEntry2Content = document.createElement('p');
blogEntry2Content.textcontent = "Lorem ipsum";
blogEntry2Img.setAttribute('class', 'blog-text');

blogEntry2.appendChild(blogEntry2Img);
blogEntry2.appendChild(blogEntry2Header);
blogEntry2.appendChild(blogEntry2Content);

//Blog Entry 3
const blogEntry3 = document.createElement('div');
blogEntry3.innerHTML = '<h1>Entry 1</h1>';
blogEntry3.setAttribute('class', 'entry');

console.log(blogEntry3);

const blogEntry3Img = document.createElement('img');
blogEntry3Img.setAttribute('src', 'images/blog-3.jpg');
blogEntry3Img.setAttribute("alt", "girl with dog overlooking the Grand Canyon");
blogEntry3Img.setAttribute('class', 'blog-picture');

const blogEntry3Header = document.createElement('h3');
blogEntry3Header.textcontent = 'Lorem Ipsum';

const blogEntry3Content = document.createElement('p');
blogEntry3Content.textcontent = "Lorem ipsum";
blogEntry3Img.setAttribute('class', 'blog-text');

blogEntry3.appendChild(blogEntry3Img);
blogEntry3.appendChild(blogEntry3Header);
blogEntry3.appendChild(blogEntry3Content);

for (let i = 0; i < blogArr.length; i++) {
	el.appendChild(blogArr[i]);
}//last thing you want. will loop over thing arr; everything and add it to this element

//Contact Forms

function show_alert () {
	alert("The form has been submitted.");

	let formInput = [];
	let name = $('#Name').val();
	let email = $('#checkoutEmail').val();
	let address = $('#address').val();
	let city = $('#city').val();
	let state = $('#state').val();
	let zipcode = $('#zipcode').val();
	let adopterStatus = $('input[
		name="adopterStatus"]:checked').val();
	let location = $('#location').val();

	formInput.push(name);
	formInput.push(email);
	formInput.push(address);
	formInput.push(city);
	formInput.push(state);
	formInput.push(zipcode);
	formInput.push(adopterStatus);
	formInput.push(location);

	console.log(formInput)
}

//Validate email
function emailValid (inputText) {
	var email = document.getElementById('txtEmail');
	var filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if(inputText.value.match(email.value)) {
		email.focus();
	return true;
	}

	else {
		alert("Please enter a valid email address.");
		email.focus();
		return false;
	}
} //Code c/o https://www.codeproject.com/Tips/492632/Email-Validation-in-JavaScript

//Dog CARDS
$('.dog-card').hover(function(e) {
	$('img', this).addClass('dog-card-border');
}) //hover over dog cards
