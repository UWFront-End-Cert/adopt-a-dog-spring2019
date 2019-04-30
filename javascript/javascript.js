function murphyInfo() {
  let myPrompt = "Murphy, good boi, cost: $100.00";
  alert(myPrompt);
};

function poppyInfo() {
  let myPrompt = "Poppy, prancy gurl, cost: $100.00";
  alert(myPrompt);
};

function jackInfo() {
  let myPrompt = "Jack, beggy boi, cost: $100.00";
  alert(myPrompt);
};

function duffyInfo() {
  let myPrompt = "Duffy, sleepy gurl, cost: $100.00";
  alert(myPrompt);
};

function lucasInfo() {
  let myPrompt = "Lucas, happy boi, cost: $100.00";
  alert(myPrompt);
};

function jakeInfo() {
  let myPrompt = "Jake, attentive boi, cost: $100.00";
  alert(myPrompt);
};

function angusInfo() {
  let myPrompt = "Angus, excito boi, cost: $100.00";
  alert(myPrompt);
};

function violetInfo() {
  let myPrompt = "Violet, cutie gurl, cost: $100.00";
  alert(myPrompt);
};

function piperInfo() {
  let myPrompt = "Piper, zoomy gurl, cost: $100.00";
  alert(myPrompt);
};

function maximusInfo() {
  let myPrompt = "Maximus, angry boi, cost: $100.00";
  alert(myPrompt);
};

function lunaInfo() {
  let myPrompt = "Luna, chill gurl, cost: $100.00";
  alert(myPrompt);
};

function stellaInfo() {
  let myPrompt = "Stella, sleepy gurl, cost: $100.00";
  alert(myPrompt);
};

//dog info ends here

function murphyPurchase() {
total = 0;
total += frm.contact_plugin.value * 10 + frm.mailing_list.value * 10;
document.getElementById("total").innerHTML = total;
}

let addCart =0;

function buttonClick(event){
    addCart = addCart + 100.00;
    alert(addCart);
}
