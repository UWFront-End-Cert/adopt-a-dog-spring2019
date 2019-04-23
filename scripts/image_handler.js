function image_handler(i, name) {
  let dog_breed = "";
  const dog_name = document.getElementsByTag("h2")[i];
  const dog_price_string = document.getElemenetByClass("price")[i];
  const dog_price_int = dog_price_string.slice(16);
  switch (dog_name) {
    case "Angus":
      dog_breed = "Boxer";
      break;
    case "Duffy":
      dog_breed = "Bull-Terrier";
      break;
    case "Jack":
      dog_breed = "Beagle";
      break;
    case "Jake":
      dog_breed = "Labrador Retriever";
      break;
    case "Lucas":
      dog_breed = "Australian Kelpie";
      break;
    case "Luna":
      dog_breed = "Labrador Retriever";
      break;
    case "Maximus":
      dog_breed = "Schnauzer";
      break;
    case "Murphy":
      dog_breed = "English Foxhound";
      break;
    case "Piper":
      dog_breed = "Nova Scotia Duck Trolling Retriever";
      break;
    case "Poppy":
      dog_breed = "Shih Tzu";
      break;
    case "Stella":
      dog_breed = "Chihuaha";
      break;
    case "Violet":
      dog_breed = "Chesapeake Bay Retriever";
      break;
  }
  alert("Name: " + dog_name + "\nBreed: " + dog_breed + "\nPrice: " + dog_price_int);
}

