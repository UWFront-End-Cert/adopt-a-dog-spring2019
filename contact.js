const fields = [
    { type: 'text',  item: 'fullname',  label: 'Name'   },
    { type: 'text',  item: 'email',     label: 'Email address'  },
    { type: 'text',  item: 'address',   label: 'Stree Address'},
    { type: 'text',  item: 'city',      label: 'City'},
    //{ type: 'text',  item: 'state',     label: 'State'},
    { type: 'text',  item: 'zip',       label: 'Zip code'},
];

const h_tag = document.createElement("h3");
h_tag.innerHTML = "Checkout";
document.body.appendChild(h_tag);

//create a form element
const fm = document.createElement('form');
fm.setAttribute("action","");
fm.setAttribute("method","post");
document.body.appendChild(fm);

//create input element
for (let i = 0; i < fields.length; i += 1) {
    const field = fields[i];
   
    const label = document.createElement('label');
    label.setAttribute('for', field.item);
    label.textContent = field.label;

    const inputField = document.createElement('input');
    inputField.setAttribute('type', field.type);
    inputField.setAttribute('id', field.item);

    fm.appendChild(label);
    fm.appendChild(inputField);
}

//create select STATE element
fm.appendChild(document.createTextNode("State"));
const st = document.createElement('select');
st.id="state";
fm.appendChild(st);
const stList = ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA",
"HI","ID","IL","IN","IA","KS","KY","LA","ME","MD",
"MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
"NM","NY","NC","ND","OH","OK","OR","PA","RI","SC",
"SD","TN","TX","VT","VA","WA","WV","WI","WY"
]
for ( i = 0; i < stList.length; i++) {
    const opt =  document.createElement("option");
    opt.value = stList[i];
    opt.text = stList[i];
    st.appendChild(opt);
    
}

//create radio element
const label = document.createElement('label');
label.textContent = 'First Time Adopter? ';
fm.appendChild(label);

const ry = document.createElement('input');
ry.setAttribute('type','radio');
ry.setAttribute('id','radioYes');
ry.setAttribute('value','yes');
ry.setAttribute('checked','checked');
fm.appendChild(ry);
fm.appendChild(document.createTextNode("Yes  "));

const rn = document.createElement('input');
rn.type = 'radio';
rn.id = 'radioNo';
rn.value = 'no';
fm.appendChild(rn);
fm.appendChild(document.createTextNode("No "));

//create select location element
  //const label = document.createElement('label');
  //label.textContent = 'Pick up Location: ';
  //fm.appendChild(label);
fm.appendChild(document.createTextNode("Pick up Location:  "));

const s = document.createElement('select');
s.id="location";
fm.appendChild(s);
const loc = ["Bellevue","Kent","Seattle"]
for ( i = 0; i < loc.length; i++) {
    const opt =  document.createElement("option");
    opt.value = loc[i];
    opt.text = loc[i];
    s.appendChild(opt);  
}

//create image element
const imgArray=[
    {class :"checkout-dog", src : "images/lucas-card.jpg", alt:'lucus', cost: '$1234.5'},
    {class :"checkout-dog", src : "images/duffy-card.jpg", alt:'duffy', cost: '$123.45'}
];
for ( i = 0; i < imgArray.length; i++) {
    const img = document.createElement('img');
    img.src = imgArray[i].src;
    img.alt = imgArray[i].alt;
    img.className = imgArray[i].class;
    fm.appendChild(img);
}
//create total
fm.appendChild(document.createTextNode("Total Adoption Cost "));


//create a submit input element
const sb = document.createElement('input');
sb.type='submit';
sb.value='Submit';
fm.appendChild(sb);

/* create a submit button element
const sb = document.createElement('button');
sb.setAttribute('type', 'submit');
sb.textContent = 'Submit';
fm.appendChild(sb);
fm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('fm submitted!');
});
*/
