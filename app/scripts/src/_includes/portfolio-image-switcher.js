const image1 = "../images/albatross-halftone.png";
const image1ALT = "../images/albatross.png";

const image2 = "../images/portfolio-halftone.png";
const image2ALT = "../images/portfolio.png";

const image3 = "../images/brandish-halftone.png";
const image3ALT = "../images/brandish.png";

const image4 = "../images/fitfuture-halftone.png";
const image4ALT = "../images/fitfuture.png";

const imageContainer = document.querySelector("#container")

imageContainer.addEventListener('mouseover', imageChanger);

function imageChanger(e) {

	console.log(e.target);

	if (e.target.id.includes("image")) {

		if (e.target.getAttribute('src').includes("halftone")) {

			console.log("YAS");

			e.target.src = image1ALT;

		}

	}

	else {
		console.log("uh oh");
	}

}