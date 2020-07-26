let cards = document.querySelectorAll(".uk-card");
for (let card of cards) {
	card.addEventListener("mouseleave", () => {
		card.classList.add("uk-card-default");
		card.classList.remove("uk-card-secondary");
	});
	card.addEventListener("mouseenter", ()=> {
		card.classList.add("uk-card-secondary");
		card.classList.remove("uk-card-default");
	});
}

function createCard(title, subtitle, pricing, imgurl) {
	let wrapper = document.createElement("div");
	let card = document.createElement("div")
	card.classList.add("uk-card", "uk-width-medium", "uk-card-default", "uk-dark");
	let imgDiv = document.createElement("div")
	let img = document.createElement("img");
		img.setAttribute("width", "500")
		img.setAttribute("height", "500")
		img.setAttribute("data-src", imgurl)
		img.setAttribute("uk-img", "")
	imgDiv.classList.add("uk-card-media-top");
		imgDiv.appendChild(img)
	let cardBody = document.createElement("div")
		cardBody.classList.add("uk-card-body");
	let h3 = document.createElement("h3");
		h3.classList.add("uk-card-title");
	let titleText = document.createTextNode(title);
		h3.appendChild(titleText);
	cardBody.appendChild(h3);
	card.appendChild(imgDiv);
	card.appendChild(cardBody);
	card.addEventListener("mouseleave", () => {
		card.classList.add("uk-card-default");
		card.classList.remove("uk-card-secondary");
	});
	card.addEventListener("mouseenter", ()=> {
		card.classList.add("uk-card-secondary");
		card.classList.remove("uk-card-default");
	});
	wrapper.appendChild(card);
	return wrapper;	
}
