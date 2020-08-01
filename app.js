let global = {
	packages: [
			{name: "Package 1"},
			{name: "Package 2"},
			{name: "Package 3"},
			{name: "Package 4"}
	],
		services: [
				{name: "Service 1"},
				{name: "Service 2"},
				{name: "Service 3"},
				{name: "Service 4"}
		]
}

let oneTimeServices = document.getElementById("one-time-services")
for (let service of global.services) {
	oneTimeServices.appendChild(createCard(service.name));
}
let packages = document.getElementById("packages");
for (let package of global.packages) {
	packages.appendChild(createCard(package.name));
}
function createCard(title, subtitle, pricing, imgurl) {
	let wrapper = document.createElement("div");
	let card = document.createElement("div")
	card.classList.add("uk-card", "uk-width-medium", "uk-card-default", "uk-dark");
	let imgDiv = document.createElement("div")
	let img = document.createElement("img");
		img.setAttribute("width", "500")
		img.setAttribute("height", "500")
		img.setAttribute("data-src", "./assets/image-placeholder-500x500.jpg")
		img.setAttribute("uk-img", "")
		img.classList.add("card-img")
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
