const fs = require("node:fs");

fs.readFile("./file.txt", "utf-8", (err, text) => {
	console.log(text);
});

console.log("Haciendo esto mientras...");

fs.readFile("./file2.txt", "utf-8", (err, text) => console.log(text));
