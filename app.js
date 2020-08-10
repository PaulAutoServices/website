let global = {
	packages: [
		{
			name: "Hatchback",
			desc:
				"This is a description of the pack and what it is for. It can also cover how to use the pack.",
			cost: 500,
			options: [
				"Vacuum + Door Panel + Dashboard",
				"Vacuum + Door Panel + Trunk + Roof"
			]
		},
		{
			name: "Sedan",
			desc:
				"This is a description of the pack and what it is for. It can also cover how to use the pack.",
			cost: 600,
			options: [
				"Vacuum + Door Panel + Dashboard + Roof",
				"Vacuum + Door Panel + Trunk + Roof"
			]
		},
		{
			name: "SUV & Luxury",
			desc:
				"This is a description of the pack and what it is for. It can also cover how to use the pack.",
			cost: 800,
			options: [
				"Vacuum + Door Panel + Dashboard + Roof",
				"Vacuum + Door Panel + Trunk + Roof"
			]
		}
	],
	services: [
		{ name: "Interior" },
		{ name: "Exterior" },
		{ name: "Teflon Coating" }
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

let packages = document.getElementById("packages");
for (let package of global.packages) {
	packages.appendChild(createFlatCard(package));
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

function createFlatCard(obj) {
	let wrapper = document.createElement("div");
	let card = document.createElement("div");
	card.classList.add("sw-flat-card", "uk-width-medium", "uk-dark");
	card.style.marginTop = "30px";
	let title = document.createElement("div");
	title.appendChild(document.createTextNode(obj.name));
	title.classList.add("sw-heading-large");
	card.appendChild(title);
	let desc = document.createElement("div");
	desc.appendChild(document.createTextNode(obj.desc));
	desc.classList.add("custom-text");
	card.appendChild(desc);
	let imgDiv = document.createElement("div");
	imgDiv.classList.add("uk-card-media-top");
		imgDiv.style.marginTop = "20px";
	let img = createImg("500", "500");
	imgDiv.appendChild(img);
	img.classList.add("card-img");
	let h3 = document.createElement("div");
	h3.classList.add("sw-heading-large");
	let titleText = document.createTextNode("\u20B9\u0020" + obj.cost);
	h3.appendChild(titleText);
	let pack1 = document.createElement("div");
		pack1.appendChild(document.createTextNode(obj.options[0]));
		pack1.classList.add("uk-width-1-1", "uk-button", "uk-button-secondary");
	let pack2 = document.createElement("div");
		pack2.appendChild(document.createTextNode(obj.options[1]));
		pack2.classList.add("uk-width-1-1", "uk-button", "uk-button-default");
	card.appendChild(imgDiv);
	card.appendChild(h3);
	card.appendChild(pack1);
	card.appendChild(pack2);
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
