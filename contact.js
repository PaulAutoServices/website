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
	{icon: "receiver", title: "By Phone", desc: "+91-21323141"},
	{icon: "mail", title: "By Mail", desc: "paulautoservies@outlook.com"},
	{icon: "location", title: "On Location", desc: "221B, Baker Street, London"}
]
let contactOptionsDiv = document.getElementById("contact-options");
for (let option of contactOptions) {
	contactOptionsDiv.appendChild(createIconCard(option));
}
