

function dogInfo(name, breed, cost) {
  alert(`${name}, ${breed}, ${cost}`);
}

$('.dog-box').hover(function(e) {
  $('img', this).addClass('dog-img-fade');
})
