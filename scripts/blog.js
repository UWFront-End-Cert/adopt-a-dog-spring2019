const blog = document.getElementById('main');

//create image Array
const imgArray = [
    {class :"clear", src : "images/blog-1.jpg", alt:'a boy huges a dog image'},
	{class :"clear", src : "images/blog-2.jpg", alt:'a boy huges a dog image'},
    {class :"clear", src : "images/blog-3.jpg", alt:'duffy'}
];
//create header Array
const headerArray = [
	{text: '<h2>Traveling With Your Dog</h2>'},
	{text: '<h2>How To Walk Multiple Dogs</h2>'},
	{text: '<h2>Teach Your Dog To Fetch!</h2>'}
];
//create info Array
const infoArray =[
	{info: '<p>1Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, conet labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea adqui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernamvoluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.</p><p>Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, conet labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea adqui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernamvoluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.</p>'},
	{info: '<p>2Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, conet labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea adqui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernamvoluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.</p><p>Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, conet labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea adqui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernamvoluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.</p>'},
	{info: '<p>3Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, conet labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea adqui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernamvoluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.</p><p>Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, conet labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea adqui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernamvoluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.</p>'}
];

const m = document.createElement('main');
m.innerHTML = '<h1>Adoptadog Blog</h1>';
document.body.appendChild(m);

const c = document.createElement('div');
c.className = "blog-container";
m.appendChild(c);

for (let i=0; i < headerArray.length; i++) {
	const img = document.createElement('img');
	img.src = imgArray[i].src;
	img.alt = imgArray[i].alt;
	img.className = imgArray[i].class;

	const d = document.createElement('div');
	d.setAttribute('class','blog');
	d.append(img);  // didn't display image
	d.innerHTML = headerArray[i].text + infoArray[i].info;
	d.append(img);

	c.appendChild(d);
}
