let navbar = {
	logo: "./assets/logo.png",
	rightLinks: [
		new Link("./index.html", "Home"),
		new Link("./about-us.html", "About"),
		new Link("./contact.html", "Contact", true)
	],
	leftLinks: [],
	colorScheme: "dark"
};
let navbarDiv = document.getElementById("navbar");
navbarDiv.appendChild(createNavbar(navbar));

let contactForm = document.getElementById("contact-form");
contactForm.appendChild(createContactUsForm());

let contactOptions = [
	{icon: "./assets/star.svg", title: "By Phone", desc: "+91-21323141"},
	{icon: "./assets/star.svg", title: "By Mail", desc: "paulautoservies@outlook.com"},
	{icon: "./assets/star.svg", title: "On Location", desc: "221B, Baker Street, London"}
]
let contactOptionsDiv = document.getElementById("contact-options");
for (let option of contactOptions) {
	contactOptionsDiv.appendChild(createIconCard(option));
}
