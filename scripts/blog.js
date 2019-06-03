var img1 = document.createElement("img");
img1.src = "http://canacopegdl.com/images/number-one/number-one-6.jpg";
var img2 = document.createElement("img");
img2.src =
  "https://etc.usf.edu/presentations/extras/" +
  "letters/fridge_magnets/orange/03/2-300.png";
var img3 = document.createElement("img");
img3.src =
  "http://3.bp.blogspot.com/-LVeQ2qILkXc/" +
  "U5IOTGFLmcI/AAAAAAAAHhM/J4uSckUE0ww/s1600/three.png";
const array_images = [img1, img2, img3];

var mediaq_d = window.matchMedia("@media screen and (min-width: 1148px)");
var mediaq_t = window.matchMedia(
  "@media screen and (max-width: 1148px) and (min-width: 600px)"
);
var mediaq_m = window.matchMedia("@media screen and (max-width: 600px)");

const array_blog_text = [
  "Simplex chartam ultimum dubitem" +
    " vi de ignorem is mallent. Conari pileos calida si indere " +
    "gi. Meditatas obstinate eo id immittant si eversioni. " +
    "Me circulum mutuatur diversas ut. Talium ex audita is " +
    "gustum et ha nullam certis. Effectus supponit continet " +
    "vi simulque de siquidem. Erunt bonus istas ferri de favis " +
    "facit at. Figuras hoc vul innatis figuram.<br>Ii alterius " +
    "ferventi momentum co cohiberi notitiam si. Veram sed ipsos " +
    "longe supra nam pla vitae cui. Eo et ad potest ausint clarae." +
    " Modi viam atra ii cera ea plus hinc. Hic efficitur cur formantur " +
    "desinerem his corporeas percipior. Ubi indefinite sim deteriorem " +
    "mem transferre lus. Animalia mei cernitur cui pendeant figmenta " +
    "ejusmodi. Tangatur una acceptis lor intuebar deceptor sub quaesita. " +
    "Reducantur cau nam perficitur ubi nec incidissem."
];

function styleTitle(elem) {
  //alert("Styling Article Title");
  elem.style.color = "#330066";
  if (mediaq_d.matches) {
    elem.style.fontsize = "2.5em";
  } else if (mediaq_t.matches) {
    elem.style.fontsize = "1.5em";
  } else {
    elem.style.fontsize = "1.5em";
  }
  return elem;
}

function styleImage(image) {
  //alert("Styling Image");
  image.style.width = "33%";
  image.style.height = "auto";
  image.style.marginRight = "15px";
  image.style.float = "left";
  return image;
}

function stylePageHeading(elem) {
  //alert("Styling Page Title");
  elem.style.color = "#330066";
  if (mediaq_d.matches) {
    elem.style.fontSize = "450%";
  } else if (mediaq_t.matches) {
    elem.style.fontSize = "300%";
  } else {
    elem.style.fontSize = "150%";
  }
  return elem;
}

function styleText(elem) {
  //alert("Styling body text")
  if (mediaq_d.matches) {
    alert("Desktop");
    elem.style.fontSize = "2em";
    elem.style.padding = "1em";
  } else if (mediaq_t.matches) {
    alert("Tablet");
    elem.style.fontSize = "1em";
    elem.style.padding = "1em";
  } else {
    alert("Mobile");
    elem.style.display = "none";
    alert("mobile2");
  }
  return elem;
}

function makeArticles(num, sect) {

  var article_header;
  //alert("in function");
  var i;
  for (i = 0; i < num; i += 1) {
    //alert("in loop");
    const Article = document.createElement("article");
    Article.style.width = "100%";
    Article.style.paddingTop = "2em";
    Article.style.paddingBottom = "2em";
    Article.style.overflow = "hidden";
    sect.appendChild(Article);
    article_header = document.createElement("h3");
    article_header.textContent = "Title " + i;
    Article.appendChild(styleImage(array_images[i]));
    Article.appendChild(styleTitle(article_header));
    Article.appendChild(styleText(array_blog_text[0]));

  }
}

function blogTitle() {
  //alert("in function");
  const sect = document.getElementsByClassName("main-content")[0];
  const title = document.createElement("h2");
  title.textContent = "Adoptadog Blog";
  sect.appendChild(stylePageHeading(title));
  makeArticles(3, sect);
}
