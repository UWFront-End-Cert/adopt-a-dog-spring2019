const headOne = document.createElement('h2');
headOne.textContent = 'Adoptadog Blog';
document.getElementById("container").appendChild(headOne);

const i = [{
		img: "img/blog-1.jpg",
		h3:'Traveling With Your Dog',
		p1: 'typesetting industry. Lorem Ipsum has been the industrytypesetting industry. Lorem Ipsum has been the industrytypesetting industry. Lorem Ipsum has been the industrytypesetting industry. Lorem Ipsum has been the industry',
		p2: 'tTttypesetting industry. Lorem Ipsum has been the industrytypesetting industry. Lorem Ipsum has been the industrytypesetting industry. Lorem Ipsum has been the industrytypesetting industry. Lorem Ipsum has been the industry'
},
{
		img: "img/blog-2.jpg",
		h3:'Traveling With Your Dog2test',
		p1: 'typesetting industry. Lorem Ipsum has been the industrytypesetting industry. Lorem Ipsum has been the industrytypesetting industry. Lorem Ipsum has been the industrytypesetting industry. Lorem Ipsum has been the industry',
		p2: 'tTttypesetting industry. Lorem Ipsum has been the industrytypesetting industry. Lorem Ipsum has been the industrytypesetting industry. Lorem Ipsum has been the industrytypesetting industry. Lorem Ipsum has been the industry'
},
{
		img: "img/blog-3.jpg",
		h3:'Traveling With Your Dog3test',
		p1: 'typesetting industry. Lorem Ipsum has been the industrytypesetting industry. Lorem Ipsum has been the industrytypesetting industry. Lorem Ipsum has been the industrytypesetting industry. Lorem Ipsum has been the industry',
		p2: 'tTttypesetting industry. Lorem Ipsum has been the industrytypesetting industry. Lorem Ipsum has been the industrytypesetting industry. Lorem Ipsum has been the industrytypesetting industry. Lorem Ipsum has been the industry'
}
];

for (let z = 0; z < i.length; z+=1){
	const title = i[z];

const block = document.createElement('div');
block.setAttribute('class', 'block-1');
block.setAttribute('id', 'block-1');
document.getElementById("container").appendChild(block);

const firstDiv = document.createElement('div');
firstDiv.setAttribute('class', 'first-side');
firstDiv.setAttribute('id', 'first-side');
document.getElementById("block-1").appendChild(firstDiv);


const img = document.createElement('img');
img.setAttribute('src', title.img);
document.getElementById("first-side").appendChild(img);

const secondDiv = document.createElement('div');
secondDiv.setAttribute('class', 'second-side');
secondDiv.setAttribute('id', 'second-side');
document.getElementById("block-1").appendChild(secondDiv);

const headTwo = document.createElement('h3');
headTwo.textContent = title.h3;
document.getElementById("second-side").appendChild(headTwo);

const pOne = document.createElement('p');
pOne.setAttribute('class', 'first');
pOne.textContent = title.p1;
document.getElementById("second-side").appendChild(pOne);

const pTwo = document.createElement('p');
pTwo.setAttribute('class', 'second');
pTwo.textContent = title.p2;
document.getElementById("second-side").appendChild(pTwo);

block.removeAttribute('id', 'block-1');
firstDiv.removeAttribute('id', 'first-side');
secondDiv.removeAttribute('id', 'second-side');

}
