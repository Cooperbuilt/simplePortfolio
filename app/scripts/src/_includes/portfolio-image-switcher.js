const image1EL = document.getElementById("image1");
const image1 = "../images/albatross-halftone.png";
const image1ALT = "../images/albatross.png";

const image2EL = document.getElementById("image2");
const image2 = "../images/portfolio-halftone.png";
const image2ALT = "../images/portfolio.png";

const image3EL = document.getElementById("image3");
const image3 = "../images/brandish-halftone.png";
const image3ALT = "../images/brandish.png";

const image4EL = document.getElementById("image4");
const image4 = "../images/fitfuture-halftone.png";
const image4ALT = "../images/fitfuture.png";

//Image 1 Event Handlers
image1EL.addEventListener('mouseover', function() {
	this.src = image1ALT;
}, false);

image1EL.addEventListener('mouseleave', function() {
	this.src = image1;
}, false);

//Image 2 Event Handlers
image2EL.addEventListener('mouseover', function() {
	this.src = image2ALT;
}, false);

image2EL.addEventListener('mouseleave', function() {
	this.src = image2;
}, false);

//Image 3 Event Handlers
image3EL.addEventListener('mouseover', function() {
	this.src = image3ALT;
}, false);

image3EL.addEventListener('mouseleave', function() {
	this.src = image3;
}, false);

//Image4 Event Handlers
image4EL.addEventListener('mouseover', function() {
	this.src = image4ALT;
}, false);

image4EL.addEventListener('mouseleave', function() {
	this.src = image4;
}, false);



