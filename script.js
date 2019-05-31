let adoptionFee = 123.45;

let totalPrice = 0;

        function dogClick(data) {
            alert(data);
        }

        function adoptionClick() {

            totalPrice = adoptionFee + totalPrice;

            alert("You have added a new forever friend to your basket. Your total adoption is $" + totalPrice.toFixed(2));
        }