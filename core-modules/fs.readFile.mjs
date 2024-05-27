// Esto sólo en los módulos nativos que no tienen promesas
// const { promisify } = require("node:util");
// const readFilePromise = promisify(fs.readFile)

// const fs = require("node:fs/promises");

// fs.readFile("./file.txt", "utf-8").then((text) => {
// 	console.log(text);
// });

// console.log("Haciendo esto mientras...");

// fs.readFile("./file2.txt", "utf-8").then((text) => console.log(text));
import { readFile } from "node:fs/promises";

Promise.all([
	readFile("./file.txt", "utf-8"),
	readFile("./file2.txt", "utf-8"),
]).then(([mono, mona]) => {
	console.log("primer texto", mono);
	console.log("segundo texto", mona);
});
