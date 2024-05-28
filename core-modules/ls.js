const fs = require("node:fs");

fs.readdir(".", (err, files) => {
	if (err) {
		return console.log("Error al leer el directiorio: ", err);
	}
	files.forEach((file) => {
		console.log(file);
	});
});
