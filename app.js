let global = {
	packages: [
		{ name: "Package 1" },
		{ name: "Package 2" },
		{ name: "Package 3" },
	],
	services: [
		{ name: "Interior" },
		{ name: "Exterior" },
		{ name: "Teflon Coating" },
	],
	testimonies: [
		{
			source: "Owner of ",
			citeLink: "Wall Street Journal",
			content:
				"The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a footer or cite element"
		},
		{
			source: "Staff of ",
			citeLink: "Wall Street Journal",
			content:
				"The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a footer or cite element"
		}
	]
};

let oneTimeServices = document.getElementById("services");
for (let service of global.services) {
	oneTimeServices.appendChild(createCard(service.name));
}
let packages = document.getElementById("packages");
for (let package of global.packages) {
	packages.appendChild(createCard(package.name));
}
let testimonyDiv = document.getElementById("testimonies");
for (let testimony of global.testimonies) {
	testimonyDiv.appendChild(
		createTestimony(
			testimony.source,
			testimony.citeLink,
			testimony.content
		)
	);
}
function createCard(title, subtitle, pricing, imgurl) {
	let wrapper = document.createElement("div");
	let card = document.createElement("div");
	card.classList.add(
		"uk-card",
		"uk-width-medium",
		"uk-card-default",
		"uk-dark"
	);
	let imgDiv = document.createElement("div");
	imgDiv.classList.add("uk-card-media-top");
	let img = createImg("500", "500");
	imgDiv.appendChild(img);
	img.classList.add("card-img");
	let cardBody = document.createElement("div");
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
	card.addEventListener("mouseenter", () => {
		card.classList.add("uk-card-secondary");
		card.classList.remove("uk-card-default");
	});
	wrapper.appendChild(card);
	return wrapper;
}

function createImg(width, height) {
	let img = document.createElement("img");
	img.setAttribute("width", width);
	img.setAttribute("height", height);
	img.setAttribute("data-src", "./assets/image-placeholder-500x500.jpg");
	img.setAttribute("uk-img", "");
	return img;
}

function createTestimony(source, citeLink, content, image) {
	let li = document.createElement("li");
	let testimonyDiv = document.createElement("div");
	testimonyDiv.style.padding = "0 10%";
	let img = createImg("225", "150");
	img.classList.add("uk-align-left", "uk-margin-remove-adjacent");
	let blockquote = document.createElement("blockquote");
	blockquote.classList.add("uk-text-middle");
	blockquote.setAttribute("cite", "#");
	let contentP = document.createElement("p");
	contentP.classList.add("uk-margin-small-bottom");
	contentP.appendChild(document.createTextNode(content));
	blockquote.appendChild(contentP);
	let footer = document.createElement("footer");
	footer.appendChild(document.createTextNode(source));
	let cite = document.createElement("cite");
	let citeHref = document.createElement("a");
	citeHref.setAttribute("href", "#");
	citeHref.appendChild(document.createTextNode(citeLink));
	cite.appendChild(citeHref);
	footer.appendChild(cite);
	blockquote.appendChild(footer);
	testimonyDiv.appendChild(img);
	testimonyDiv.appendChild(blockquote);
	li.appendChild(testimonyDiv);
	return li;
}
