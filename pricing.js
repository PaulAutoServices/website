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
	]
};
let thead = document.getElementById("table-columns");
let tbody = document.getElementById("table-rows");
thead.appendChild(createColumns(global.packages[0]));
for (let package of global.packages) {
	tbody.appendChild(createRow(package));
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
