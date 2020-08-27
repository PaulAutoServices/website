// CUSTOM UTIL CLASS //
class Link {
	constructor(url, text, isActive) {
		this.url = url || "#";
		this.text = text || "Link";
		this.isActive = isActive || false;
	}
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
	card.classList.add(
		"sw-flat-card",
		"uk-text-center",
		"uk-width-medium",
		"uk-dark"
	);
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
	let img = createImg("500", "200", obj.img);
	imgDiv.appendChild(img);
	img.classList.add("card-img");
	img.setAttribute("uk-scrollspy", "cls:uk-animation-fade; delay: 100");
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

function createImg(width, height, src) {
	src = src || "./assets/image-placeholder-500x500.jpg";
	let img = document.createElement("img");
	img.setAttribute("width", width);
	img.setAttribute("height", height);
	img.style.height = height + "px";
	img.setAttribute("data-src", src);
	img.setAttribute("uk-img", "");
	return img;
}

function createTestimony(source, citeLink, content, image) {
	let li = document.createElement("li");
	let testimonyDiv = document.createElement("div");
	testimonyDiv.style.padding = "0 10%";
	let img = createImg("225", "300");
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

function createNavLink(obj) {
	let li = document.createElement("li");
	if (obj.isActive) li.classList.add("uk-active");
	let a = document.createElement("a");
	a.setAttribute("href", obj.url || "#");
	a.appendChild(document.createTextNode(obj.text || "Link"));
	li.appendChild(a);
	return li;
}

function createNavbar(obj) {
	let wrapper = document.createElement("div");
	let nav = document.createElement("nav");
	nav.setAttribute("uk-navbar", "");
	if (obj.colorScheme && obj.colorScheme == "dark")
		nav.classList.add("uk-background-secondary", "uk-light");
	let left = document.createElement("div");
	left.classList.add("uk-navbar-left");
	let right = document.createElement("div");
	right.classList.add("uk-navbar-right");
	let left_ul = document.createElement("ul");
	left_ul.classList.add("uk-navbar-nav");
	let right_ul = document.createElement("ul");
	right_ul.classList.add("uk-navbar-nav");
	if (obj.logo) {
		let li = document.createElement("li");
		li.appendChild(createImg(100, 100, obj.logo));
		left_ul.appendChild(li);
	}
	for (let link of obj.leftLinks) {
		left_ul.appendChild(createNavLink(link));
	}
	for (let link of obj.rightLinks) {
		right_ul.appendChild(createNavLink(link));
	}
	left.appendChild(left_ul);
	right.appendChild(right_ul);
	nav.appendChild(left);
	nav.appendChild(right);
	wrapper.appendChild(nav);
	return wrapper;
}

function createContactUsForm() {
	let wrapper = document.createElement("div");
	let title = document.createElement("div");
	title.appendChild(document.createTextNode("Get in touch"));
	title.classList.add("sw-heading-large");
	let subtitle = document.createElement("div");
	subtitle.appendChild(
		document.createTextNode(
			"Leave a message and we'll get back to you"
		)
	);
	subtitle.classList.add("sw-heading-small");
	wrapper.appendChild(title);
	wrapper.appendChild(subtitle);
	let form = document.createElement("form");
	form.classList.add("uk-form-stacked", "uk-margin-medium-top");
	form.appendChild(createInput("Full Name", "text"));
	form.appendChild(createInput("Email", "email"));
	form.appendChild(createInput("Mobile number", "number"));
	form.appendChild(createTextAreaInput("Message"));
	form.appendChild(createButton("Submit"));
	wrapper.appendChild(form);
	return wrapper;
}

function createInput(labelText, type) {
	let wrapper = document.createElement("div");
	wrapper.classList.add("uk-margin");
	let label = document.createElement("label");
	label.classList.add("sw-heading-small", "uk-form-label");
	label.appendChild(document.createTextNode(labelText));
	label.setAttribute("for", labelText);
	wrapper.appendChild(label);
	let div = document.createElement("div");
	div.classList.add("uk-form-controls");
	let input = document.createElement("input");
	input.classList.add("uk-input");
	input.setAttribute("type", type);
	input.setAttribute("id", labelText);
	div.appendChild(input);
	wrapper.appendChild(div);
	return wrapper;
}

function createTextAreaInput(labelText) {
	let wrapper = document.createElement("div");
	wrapper.classList.add("uk-margin");
	let label = document.createElement("label");
	label.classList.add("sw-heading-small", "uk-form-label");
	label.appendChild(document.createTextNode(labelText));
	label.setAttribute("for", labelText);
	wrapper.appendChild(label);
	let div = document.createElement("div");
	div.classList.add("uk-form-controls");
	let input = document.createElement("textarea");
	input.classList.add("uk-textarea");
	input.setAttribute("id", labelText);
	div.appendChild(input);
	wrapper.appendChild(div);
	return wrapper;
}

function createButton(label) {
	let button = document.createElement("button");
	button.classList.add("uk-button", "uk-button-default");
	button.appendChild(document.createTextNode(label));
	button.type = "button";
	button.onclick = () => {
		createNotification("Submitted");
	};
	return button;
}

function createNotification(msg) {
	UIkit.notification(msg, { timeout: 400 });
}

function createIconCard(obj) {
	let wrapper = document.createElement("div");
	let div = document.createElement("div");
	div.classList.add("uk-text-center", "uk-margin-medium-top");
	let icon = document.createElement("div");
	icon.setAttribute("uk-icon", "icon: " + obj.icon + "; ratio: 3");
	div.appendChild(icon);
	wrapper.appendChild(div);
	let title = document.createElement("div");
	title.classList.add(
		"uk-text-center",
		"sw-heading-medium",
		"uk-margin-medium-top"
	);
	title.appendChild(document.createTextNode(obj.title));
	wrapper.appendChild(title);
	let desc = document.createElement("div");
	desc.classList.add(
		"uk-text-center",
		"custom-text",
		"uk-margin-small-top"
	);
	desc.appendChild(document.createTextNode(obj.desc));
	wrapper.appendChild(desc);
	return wrapper;
}
