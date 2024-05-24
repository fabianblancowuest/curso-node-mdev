const fs = require("node:fs");

const text = fs.readFileSync("./file.txt", "utf-8");
console.log(text);

const secondText = fs.readFileSync("./file2.txt", "utf-8");
console.log(secondText);
