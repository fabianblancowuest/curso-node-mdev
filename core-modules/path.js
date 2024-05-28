const path = require("node:path");

// Barra separadora de carpetas según sistema operativo
console.log(path.sep);
// Crea la ruta, usa las barras según sistema operativo
const filePath = path.join("content", "subfolder", "test.txt");

console.log(filePath);

// Devuelve el nombre del fichero
const base = path.basename("/tmp/midu-secret-files/password.txt");
console.log(base);

// Devuelve el nombre del fichero sin la extensión
const filename = path.basename("/tmp/midu-secret-files/password.txt", ".txt");
console.log(filename);

const extension = path.extname("image.jpg");
console.log(extension);
