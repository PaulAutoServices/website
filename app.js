let global = {
	navbar: {
		logo: "./assets/logo.png",
		rightLinks: [
			new Link("./index.html", "Home", true),
			new Link("./about-us.html", "About", false),
			new Link("./contact.html", "Contact", false)
		],
		leftLinks: [],
		colorScheme: "dark"
	},
	packages: [
		{
			name: "Hatchback",
			desc:
				"This is a description of the pack and what it is for. It can also cover how to use the pack.",
			cost: 500,
			img: "./assets/hatchback.jpg",
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
			img: "./assets/sedan.jpg",
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
			img: "./assets/luxury.jpg",
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
let navbarDiv = document.getElementById("navbar");
navbarDiv.appendChild(createNavbar(global.navbar));
