class submissionReceipt {
  constructor(name, email, streetAddress, city, state, zip, first, location, price){
    this.name = name;
    this.email = email;
    this.address = streetAddress;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.first = first;
    this.loc = location;
    this.price = price;
  }
}
function sub(){
  let gathered = submissionReceipt($("#name").val(), $("#email").val(), $("#address").val(),  $("#city").val(), 
                                    $("#state").val(),  $("#zip").val(),  $("#first").val(), 
                                    $("#sel").val(),  $(".total:first").val());
  alert("values collected");
  console.log(this);
  alert(this);
  alert('Thank you. The information has been received.');
}
