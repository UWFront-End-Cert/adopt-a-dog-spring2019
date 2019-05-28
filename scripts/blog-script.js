
const formFields = [
    {
        name: "blog-title",
        label: "Blog Title:",
        type: "text"
    },
    {
        name:"blog-image",
        label: "Image URL:",
        type: "text"
    },
    {
        name: "blog-content",
        label: "Blog Content:",
        type: "box"
    }
];

const blogForm = document.getElementById('form-id');
const createForm = document.createElement('form');
createForm.setAttribute('id', 'blog-form-id');
blogForm.appendChild(createForm);

for (let i = 0; i <formFields.length; i++) {
    const formField = formFields[i];
    const type = formField.type;

    const label = document.createElement('label');
    label.textContent = formField.label;
    label.setAttribute('for', formField.name);
    label.setAttribute('class', 'inner-form-class');

   if (type == "text") {  
        const inputs = document.createElement('input');
        inputs.setAttribute('id', formField.name)
        inputs.setAttribute('class', 'inner-form-class');
        inputs.setAttribute('type', 'text');
        inputs.setAttribute('value', '');
        inputs.setAttribute('size', 40);
        inputs.setAttribute('maxlength', 40);   
        
        const lineBreak = document.createElement('br');

        createForm.appendChild(label);
        createForm.appendChild(inputs);    
        createForm.appendChild(lineBreak);
    
   }
    else {
        const textAreas = document.createElement('textarea');
        textAreas.setAttribute('id', formField.name)
        textAreas.setAttribute('class', 'inner-form-class');
        textAreas.setAttribute('cols', 80);
        textAreas.setAttribute('rows', 10);
        textAreas.setAttribute('maxlength', 800); 
        textAreas.setAttribute('placeholder', "Blogs are limited to 800 characters,including spaces and punctuation");
 
        const lineBreak = document.createElement('br');

        createForm.appendChild(label);
        createForm.appendChild(textAreas);       
        createForm.appendChild(lineBreak);   
    }
}

const submitBlog = document.createElement('button');
submitBlog.setAttribute('type', 'submit');
submitBlog.textContent = "Submit"
submitBlog.setAttribute('class', 'blog-submit');
submitBlog.setAttribute('class', 'submitBlog');
createForm.appendChild(submitBlog); 

createForm.addEventListener('submit', function(event) {
    event.preventDefault();

const newTitle = document.getElementById('blog-title').value;
const newImage = document.getElementById('blog-image').value;
const newContent = document.getElementById('blog-content').value;

const blogMain = document.getElementById('blog-content-id');

const newHR = document.createElement('hr');

const blogSection = document.createElement('section');
blogSection.setAttribute('class', 'flex-large');

const newBlogImage = document.createElement('img');
newBlogImage.setAttribute('class', 'home-image');
newBlogImage.setAttribute('src', newImage);
newBlogImage.setAttribute('alt', 'blog-dog-image');

const newBlogTitle = document.createElement('h2');
newBlogTitle.textContent = newTitle;
newBlogTitle.setAttribute('class', 'home-h');

const newBlogContent = document.createElement('p');
newBlogContent.textContent = newContent;
newBlogContent.setAttribute('class', 'home-p');

blogMain.appendChild(newBlogTitle);
blogMain.appendChild(blogSection);
blogSection.appendChild(newBlogImage);
blogSection.appendChild(newBlogContent);
blogMain.appendChild(newHR);

console.log('Title: ', newTitle);
console.log('Image URL: ', newImage);
console.log('Blog Content: ', newContent);

var clearForm = document.getElementById('blog-form-id');
clearForm.reset();

alert('Thank you for your blog post');
});