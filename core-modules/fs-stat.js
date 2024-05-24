const fs = require("node:fs"); // a partir de Node 16, se recomienda utilizar así

const stats = fs.statSync("./file.txt");

console.log(
	stats.isFile(),
	stats.isDirectory(),
	stats.isSymbolicLink(),
	stats.size(),
);
