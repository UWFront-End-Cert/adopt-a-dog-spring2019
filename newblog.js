const form = document.createElement('form');
form.setAttribute('class', 'top-section2')
document.body.appendChild(form);

const label = document.createElement("label");
label.textContent = "Title: ";
form.appendChild(label);

let title = document.createElement("input");
title.setAttribute('type', 'text');
title.setAttribute('value', '');
title.setAttribute('id', '1'),
form.appendChild(title);

const label2 = document.createElement("label2");
label2.textContent = "Blog Text: ";
form.appendChild(label2);

let blogText = document.createElement("input");
blogText.setAttribute('type', 'text');
blogText.setAttribute('value', '');
blogText.setAttribute('id', '2'),
form.appendChild(blogText);

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';
form.appendChild(submitButton);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const newDiv = document.createElement("div");
    newDiv.setAttribute('class', 'top-section2')
    const titulo = document.createElement("h3");
    titulo.innerText = document.getElementById("1").value;

    const para = document.createElement("p");
    para.innerText = document.getElementById("2").value;

    newDiv.appendChild(titulo);
    newDiv.appendChild(para);
    console.log(newDiv);
    document.getElementById("myDIV").prepend(newDiv);
    alert('Thank you. The form information has been received');
});
