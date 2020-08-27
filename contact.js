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
