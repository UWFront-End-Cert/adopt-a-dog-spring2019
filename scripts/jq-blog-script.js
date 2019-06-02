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

$('#form-id').append('<form id="blog-form-id"></form>')

for (let i = 0; i <formFields.length; i++) {
    const formField = formFields[i];
    //const formType = formField.type;
    //const formName = formField.name;
    //const formLabel = formField.label

//     const label = document.createElement('label');
//     label.textContent = formField.label;
//     label.setAttribute('for', formField.name);
//     label.setAttribute('class', 'inner-form-class');

    $('#blog-form-id').append('<label class="inner-form-class"></label>')
    $('label.inner-form-class').last().attr('for', formField.name)
    $('label.inner-form-class').last().text(formField.label)

    if (formField.type == "text") {  

        $('#blog-form-id').append('<input class="inner-form-class"/>')
        $('input.inner-form-class').last().attr('id', formField.name)
        $('input.inner-form-class').last().attr('type', 'text')
        $('input.inner-form-class').last().attr('value', '')
        $('input.inner-form-class').last().attr('size', 40)
        $('input.inner-form-class').last().attr('maxlength', 40)
        $('#blog-form-id').append('<br/>')    
    }
     else {
        $('#blog-form-id').append('<textarea class="inner-form-class"></textarea>')
        $('textarea.inner-form-class').last().attr('id', formField.name)
        $('textarea.inner-form-class').last().attr('cols', 80)
        $('textarea.inner-form-class').last().attr('rows', 10)
        $('textarea.inner-form-class').last().attr('maxlength', 800)
        $('textarea.inner-form-class').last().attr('placeholder', 'Blogs are limited to 800 characters,including spaces and punctuation')
        $('#blog-form-id').append('<br/>')  
 
    }
}
$('#blog-form-id').append('<button type="submit" class="submitBlog">Submit</button>')

//add blog post

$('button.submitBlog').click(function(event){
    event.preventDefault();

    $('#blog-content-id').append('<h2 class="home-h"></h2>');
    $('h2.home-h').last().text($('#blog-title').val());
    $('#blog-content-id').append('<section class="flex-large"></section>');
    $('section.flex-large').last().append('<img class="home-image" alt="dog blog"></img>')
    $('img.home-image').last().attr('src', $('#blog-image').val())
    $('section.flex-large').last().append('<p class="home-p"></p>')
    $('p.home-p').last().text($('#blog-content').val());
    $('#blog-content-id').append('<hr/>');

    console.log('Title: ', $('#blog-title').val());
    console.log('Image URL: ', $('#blog-image').val());
    console.log('Blog Content: ', $('#blog-content').val());

    $('#blog-form-id').trigger('reset');

    alert('Thank you for your blog post');

})