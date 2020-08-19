let global = {
	packages: [
		{ name: "Package 1" },
		{ name: "Package 2" },
		{ name: "Package 3" },
		{ name: "Package 4" }
	],
	services: [
		{ name: "Service 1" },
		{ name: "Service 2" },
		{ name: "Service 3" },
		{ name: "Service 4" }
	],
	prices: [
		{
			img: "./assets/pricing-hatchback.jpg",
			options: [
				{ name: "Pack 1" },
				{ name: "Pack 2" },
				{ name: "Pack 3" },
				{ name: "Pack 4" }
			]
		},
		{
			img: "./assets/pricing-sedan.jpg",
			options: [
				{ name: "Pack 1" },
				{ name: "Pack 2" },
				{ name: "Pack 3" },
				{ name: "Pack 4" }
			]
		},
		{
			img: "./assets/pricing-luxury.jpg",
			options: [
				{ name: "Pack 1" },
				{ name: "Pack 2" },
				{ name: "Pack 3" },
				{ name: "Pack 4" }
			]
		}
	]
};
let slideshow = document.getElementById("slideshow");
slideshow.appendChild(createSlideshow(global.prices));

function createSlideshow(items) {
	let div = document.createElement("div");
	let ul = document.createElement("ul");
	ul.classList.add("uk-slideshow-items");
	for (let slideshowObj of items) {
		ul.appendChild(createSlideshowItem(slideshowObj));
	}
	div.appendChild(ul);
	let next = document.createElement("a");
	let back = document.createElement("a");
	next.classList.add(
		"uk-position-center-right",
		"uk-position-small",
		"uk-light",
		"uk-hidden-hover"
	);
	back.classList.add(
		"uk-light",
		"uk-position-center-left",
		"uk-position-small",
		"uk-hidden-hover"
	);
	next.setAttribute("href", "#");
	next.setAttribute("uk-slidenav-next", "");
	next.setAttribute("uk-slideshow-item", "next");
	back.setAttribute("href", "#");
	back.setAttribute("uk-slidenav-previous", "");
	back.setAttribute("uk-slideshow-item", "previous");
	div.appendChild(back);
	div.appendChild(next);
	div.classList.add("uk-position-relative", "uk-visible-toggle");
	div.setAttribute("tabindex", -1);
	div.setAttribute("uk-slideshow", "");
	div.style.height = "calc(100vh - 100px)";
	return div;
}
function createSlideshowItem(obj) {
	let li = document.createElement("li");
	let img = document.createElement("img");
	img.setAttribute("src", obj.img);
	img.style.height = "50%";
	let row = document.createElement("div");
	row.classList.add(
		"uk-flex-center",
		"uk-grid-divider",
		"uk-child-width-expand@s",
		"uk-grid-match"
	);
	row.setAttribute("uk-grid", "");
	for (let option of obj.options) {
		row.appendChild(createFlatCard(option));
	}
	li.appendChild(img);
	li.appendChild(row);
	return li;
}
function createColumns(obj) {
	let tr = document.createElement("tr");
	for (let key in obj) {
		let th = document.createElement("th");
		th.appendChild(document.createTextNode(key));
		tr.appendChild(th);
	}
	return tr;
}
function createRow(obj) {
	let tr = document.createElement("tr");
	for (let key in obj) {
		let td = document.createElement("td");
		td.appendChild(document.createTextNode(obj[key]));
		tr.appendChild(td);
	}
	return tr;
}
function createFlatCard(obj) {
	let wrapper = document.createElement("div");
	let card = document.createElement("div");
	card.classList.add("sw-flat-card", "uk-text-center", "uk-width-medium");
	card.style.marginTop = "30px";
	card.style.height = "calc(100vh - 70%)";
	let title = document.createElement("div");
	title.appendChild(document.createTextNode(obj.name));
	title.classList.add("sw-heading-large");
	card.appendChild(title);
	let desc = document.createElement("div");
	desc.appendChild(document.createTextNode(obj.name));
	desc.classList.add("custom-text");
	card.appendChild(desc);
	let h3 = document.createElement("div");
	h3.classList.add("sw-heading-large");
	//let titleText = document.createTextNode("\u20B9\u0020" + obj.cost);
	h3.appendChild(title);
	card.appendChild(h3);
	wrapper.appendChild(card);
	return wrapper;
}
