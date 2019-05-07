let dog_list = {"Angus":"Boxer", 
                "Duffy":"Bull-Terrier", 
                "Jack":"Beagle", 
                "Jake":"Labrador Retriever", 
                "Lucas":"Australian Kelpie", 
                "Luna":"Labrador Retriever", 
                "Maximus":"Schnauzer", 
                "Murphy":"English Foxhound", 
                "Piper":"Nova Scotia Duck Trolling Retriever", 
                "Poppy":"Shih Tzu", 
                "Violet":"Chespaeke Bay Retriever"};

function image_handler(i) {
  let dog_breed = "";
  const dog_name = document.getElementsByTagName("h2")[i].innerHTML;
  const dog_price_string = document.getElementsByClassName("price")[i].innerHTML;
  const dog_price_int = dog_price_string.substr(16);
  alert("Name: " + dog_name + "\nBreed: " + dog_list[dog_name] + "\nPrice: $"+ dog_price_int);
}

