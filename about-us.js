let ratings = [
	{
		author: "Choudhary",
		job: "CEO at Carlston",
		rating: 5,
		subject: "Duis posuere quam a",
		comment:
			"Duis posuere quam a ex lacinia, vel elementum mi condimentum. Donec ultrices, arcu viverra fringilla varius, nisi metus sodales lacus, ac tristique mi eros at augue."
	},
	{
		author: "Choudhary",
		job: "CEO at Carlston",
		rating: 5,
		subject: "Duis posuere quam a",
		comment:
			"Duis posuere quam a ex lacinia, vel elementum mi condimentum. Donec ultrices, arcu viverra fringilla varius, nisi metus sodales lacus, ac tristique mi eros at augue."
	},
	{
		author: "Choudhary",
		job: "CEO at Carlston",
		rating: 5,
		subject: "Duis posuere quam a",
		comment:
			"Duis posuere quam a ex lacinia, vel elementum mi condimentum. Donec ultrices, arcu viverra fringilla varius, nisi metus sodales lacus, ac tristique mi eros at augue."
	}
];

let ratingsContainer = document.getElementById("ratings-container");
for (let rating of ratings) {
	ratingsContainer.appendChild(createRatingCard(rating));
}

function createRatingCard(obj) {
	let wrapper = document.createElement("div");
	let card = document.createElement("div");
	card.classList.add(
		"sw-flat-card",
		"uk-text-left",
		"uk-width-medium",
		"uk-dark"
	);
	card.style.marginTop = "30px";
	let stars = document.createElement("div");
	stars.classList.add("uk-text-center");
	for (let i = 0; i < obj.rating; i++) {
		let star = document.createElement("span");
		let star_img = document.createElement("img");
		star_img.setAttribute("src", "./assets/star.svg");
		star_img.setAttribute("width", "30px");
		star_img.style.paddingRight = "10px";
			star_img.setAttribute("uk-scrollspy", "cls: uk-animation-scale-down; delay: " + i * 100);
		star.appendChild(star_img);
		stars.appendChild(star);
	}
	card.appendChild(stars);
	let title = document.createElement("div");
	title.appendChild(document.createTextNode(obj.subject));
	title.classList.add("sw-heading-medium");
	card.appendChild(title);
	let desc = document.createElement("div");
	desc.appendChild(document.createTextNode(obj.comment));
	desc.classList.add("custom-text");
	card.appendChild(desc);
	let h3 = document.createElement("div");
	h3.classList.add("sw-heading-small", "uk-text-right");
	let author = document.createTextNode(
		"- " + obj.author + ", " + obj.job
	);
	h3.appendChild(author);
	card.appendChild(h3);
	wrapper.appendChild(card);
	return wrapper;
}
