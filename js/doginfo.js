//global variables
let feeTotal = 0;


//image click function
//pop alert with name, breed and fees
function showInfo(dogname, dogbreed, dogfee){
  alert(`${dogname} is a ${dogbreed}.\n${dogname}'s adoption fee is $${dogfee}.00.`);

  return true;
}

//button click function
function addFee(dogfee){
  //add adoption fee to feeTotal
  feeTotal += dogfee;

  //pop alert with formatted fee total
  alert(`Current total adoption fees: $${feeTotal}.00.`);

  return true;
}
