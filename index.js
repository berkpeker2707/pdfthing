const fs = require("fs");
const pdf = require("pdf-extraction");

let dataBuffer = fs.readFileSync("./PDFFiles/PackingSlips.pdf");

pdf(dataBuffer).then(function (data) {
	// PDF text
	console.log(data.text);
});