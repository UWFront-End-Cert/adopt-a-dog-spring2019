const x = 123.45;
const y = 0;
let result = 0;

function addAdopt() {
  result = x + y;

  alert(result);
}

$(".dog").addClass("enlarge");


var FormData = new FormData("document.querySelector('AdoptMe')");



const newblog = [
  {
    header: "Traveling with your Dog",
    blogtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt ornare massa eget egestas. Purus non enim praesent elementum facilisis leo vel. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Mauris sit amet massa vitae tortor condimentum. Tellus in hac habitasse platea dictumst. Tortor aliquam nulla facilisi cras fermentum. In dictum non consectetur a erat nam at. Nunc faucibus a pellentesque sit amet porttitor eget. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Duis ultricies lacus sed turpis tincidunt id. Ipsum a arcu cursus vitae congue. Ipsum consequat nisl vel pretium lectus. A diam maecenas sed enim ut sem viverra. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Dictum non consectetur a erat nam at lectus urna. Et molestie ac feugiat sed lectus vestibulum mattis. Scelerisque fermentum dui faucibus in. At imperdiet dui accumsan sit amet nulla facilisi morbi. Dictumst quisque sagittis purus sit amet volutpat consequat. Sagittis orci a scelerisque purus semper. Scelerisque varius morbi enim nunc faucibus a. Commodo elit at imperdiet dui accumsan sit amet nulla. Morbi quis commodo odio aenean sed adipiscing diam.",
    imageLink: "images/blog-1.jpg"
  },
  {
    header: "How to Walk Multiple Dogs",
    blogtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt ornare massa eget egestas. Purus non enim praesent elementum facilisis leo vel. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Mauris sit amet massa vitae tortor condimentum. Tellus in hac habitasse platea dictumst. Tortor aliquam nulla facilisi cras fermentum. In dictum non consectetur a erat nam at. Nunc faucibus a pellentesque sit amet porttitor eget. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Duis ultricies lacus sed turpis tincidunt id. Ipsum a arcu cursus vitae congue. Ipsum consequat nisl vel pretium lectus. A diam maecenas sed enim ut sem viverra. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Dictum non consectetur a erat nam at lectus urna. Et molestie ac feugiat sed lectus vestibulum mattis. Scelerisque fermentum dui faucibus in. At imperdiet dui accumsan sit amet nulla facilisi morbi. Dictumst quisque sagittis purus sit amet volutpat consequat. Sagittis orci a scelerisque purus semper. Scelerisque varius morbi enim nunc faucibus a. Commodo elit at imperdiet dui accumsan sit amet nulla. Morbi quis commodo odio aenean sed adipiscing diam.",
    imageLink:"images/blog-2.jpg"
  },
  {
    header: "Teach Your Dog To Fetch",
    blogtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt ornare massa eget egestas. Purus non enim praesent elementum facilisis leo vel. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Mauris sit amet massa vitae tortor condimentum. Tellus in hac habitasse platea dictumst. Tortor aliquam nulla facilisi cras fermentum. In dictum non consectetur a erat nam at. Nunc faucibus a pellentesque sit amet porttitor eget. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Duis ultricies lacus sed turpis tincidunt id. Ipsum a arcu cursus vitae congue. Ipsum consequat nisl vel pretium lectus. A diam maecenas sed enim ut sem viverra. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Dictum non consectetur a erat nam at lectus urna. Et molestie ac feugiat sed lectus vestibulum mattis. Scelerisque fermentum dui faucibus in. At imperdiet dui accumsan sit amet nulla facilisi morbi. Dictumst quisque sagittis purus sit amet volutpat consequat. Sagittis orci a scelerisque purus semper. Scelerisque varius morbi enim nunc faucibus a. Commodo elit at imperdiet dui accumsan sit amet nulla. Morbi quis commodo odio aenean sed adipiscing diam.",
    imageLink: "images/blog-3.jpg"
  }
];

const newblogSelection = document.getElementById("blogsec");


newblog.forEach(function(bdiv) {

  const  blogdiv = document.createElement("bdiv");
  blogdiv.setAttribute("class", "blogdiv");


  const blogpic = document.createElement("imageLink");
  blogpic.setAttribute("src", newblog.imageLink);
  blogsec.appendChild(blogpic);


  const  header = document.createElement("h1");
  header.innerText = newblog.header;
  blogsec.appendChild(blogdiv);


  const  blogtext = document.createElement("text");
  blogtext.innerText = newblog.blogtext;
  blogsec.appendChild(blogdiv);

newblogSelection.appendChild(blogdiv);
});
