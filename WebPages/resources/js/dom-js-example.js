//Select element
var ele = document.getElementsByTagName("h1")[0];

//Select Link
var link = document.getElementById("dom-js-link");

//Select image
var img = document.getElementById("dom-js-img");



/////#############Manipulate###############################

// ele.style.color = "blue";
// ele.style.background= "yellow";
// ele.style.border= "10px solid orange";
// ele.style.fontSize = "70px";
// ele.style.padding = "20px";

//Alternative put all these changes in class in CSS and call class in JS

//Add a class
// ele.classList.add("style_class");

//Remove a class
// ele.classList.remove("style_class");

//toggle is class is not present add, if present remove
ele.classList.toggle("style_class");

//Change href
link.getAttribute("href");
link.setAttribute("href","www.fb.com");

//Change IMG

//img.getAttribute("src");
img.setAttribute("src","resources/images/brick-wall.jpg")







