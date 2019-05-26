const el = document.getElementById('blog');
el.innerHTML = '<h1>Adoptadog Blog</h1>';

const container = document.createElement('div');
container.setAttribute('class','blog-container');

const container1 = document.createElement('div');
container1.setAttribute('class','blog');
container1.innerHTML ='<h2>Traveling With Your Dog</h2>' +
'<img src="images/blog-1.jpg" alt="Traveling With Your Dog image" class="clear">' +
'<p>1Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, conet labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea adqui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernamvoluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.</p><p>Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, conet labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea adqui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernamvoluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.</p>';
container.appendChild(container1);

const container2 = document.createElement('div');
container2.setAttribute('class','blog');
container2.innerHTML = '<h2>How To Walk Multiple Dogs</h2>' +
'<img src="images/blog-2.jpg" alt="How To Walk Multiple Dogs image" class="clear">'+
'<p>2Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, conet labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea adqui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernamvoluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.</p><p>Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, conet labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea adqui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernamvoluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.</p>';
container.appendChild(container2);

const container3= document.createElement('div');
container3.setAttribute('class','blog');
container3.innerHTML ='<h2>Teach Your Dog To Fetch!</h2>' +
'<img src="images/blog-3.jpg" alt="Teach Your Dog To Fetch image" class="clear">' +
'<p>3Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, conet labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea adqui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernamvoluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.</p><p>Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, conet labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea adqui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernamvoluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.</p>';
container.appendChild(container3);

el.appendChild(container);