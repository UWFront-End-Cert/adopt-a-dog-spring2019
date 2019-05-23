let adoptionFee = 123.45;

let totalPrice = 0;

        function dogClick(data) {
            alert(data);
        }

        function adoptionClick() {

            totalPrice = adoptionFee + totalPrice;

            alert("You have added a new forever friend to your basket. Your total adoption is $" + totalPrice.toFixed(2));
        }

function submitForm() {
    alert('Thank you! The form information has been received');
}

document.getElementById('adoptionForm').onsubmit = function () {
    console.log(document.getElementById('name').value);
    console.log(document.getElementById('email').value);
    console.log(document.getElementById('streetAddress').value);
    console.log(document.getElementById('city').value);
    console.log(document.getElementById('state').value);
    console.log(document.getElementById('zip').value);
    if (document.getElementById('adoptionYes').checked) {
        console.log(document.getElementById('adoptionYes').value);
        };
    if (document.getElementById('adoptionNo').checked) {
        console.log(document.getElementById('adoptionNo').value);
        };
    let sel = document.getElementById('pickup');
        console.log(sel.selectedIndex);
        console.log(sel.options[sel.selectedIndex].value);
    return false;
};