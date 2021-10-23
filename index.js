const fs = require("fs");
const pdf = require("pdf-extraction");

let dataBuffer = fs.readFileSync("./PDFFiles/PackingSlips.pdf");

pdf(dataBuffer).then(function (data) {
	// PDF text
	// console.log(data.text);

	var str = data.text;
	const Arra =[]
	Arra.push(str)
	const mArra = str.split("\n")
	//filtering only SKU
	const sku = mArra.filter(s => s.includes('SKU'));

	//getting names for firstnames filtering
	const names = mArra.filter(s => s.includes('Name'));
	//filtering only firstname
	const firstname = names.filter((el, index) => {
	  return index % 2 === 0;
	});

	//filtering lastnames
	const lastname = mArra.filter(s => s.includes('Last'));

	//deleting first two non dates, since they're not user's order dates
	const date = mArra.filter(s => s.includes('Date'));
	date.splice(0,2)

	//creating a new array for each order
	var skuLength = sku.length;
	for (var i = 0; i < skuLength; i++) {
		var newArray = [];
		newArray.push(sku[i]);
		newArray.push(firstname[i])
		newArray.push(lastname[i])
		newArray.push(date[i])
		console.log(newArray)
	}

	// console.log(mArra.indexOf("SKU: SUB­SMUG­OPT­RBLU­1PC"))
	// console.log(mArra.indexOf("Name : Evelyn"))
	// console.log(mArra.indexOf("Last Name : Georgia"))
	// console.log(mArra.indexOf("Date : 2001"))
	// console.log(myArr);
});