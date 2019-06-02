let adoptTotal = 0;
$('input.btn-adopt').click(function() {
  const toNum = parseFloat($(this).attr('data-adopt'))
  adoptTotal = adoptTotal + toNum;
  $('h3.cart-total').text(`\$${adoptTotal.toFixed(2)}`);
})

// function dogInfo() {
//   const dogImages = document.getElementsByClassName('card-img');
//   for (let i = 0; i < dogImages.length; i++) {
//     dogImages[i].addEventListener('click', function () {
//       alert(dogImages[i].dataset.dog);
//     }
//   )}
// }

// function dogAdopt() {
//   const adoptedDog = document.getElementsByClassName('btn-adopt');
//   for (let i = 0; i < adoptedDog.length; i++) {
//     adoptedDog[i].addEventListener('click', function () {
//       const toNum = parseFloat(adoptedDog[i].dataset.adopt)
//       adoptTotal = adoptTotal + toNum;
//       alert(`Your total adoption cost is: \$${adoptTotal.toFixed(2)}`);
//     }
//   )}
// }
// dogInfo();
// dogAdopt()

