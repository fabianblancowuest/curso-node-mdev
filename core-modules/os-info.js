const os = require("node:os");

console.log("Información del sistema operativo");

console.log("Nombre del sistema operativo", os.platform());
console.log("Versión sistema operativo", os.release());
console.log("Arquitectura del sistema operativo", os.arch());
console.log("Versión sistema operativo", os.release());
console.log("CPUs", os.cpus()); // Para escalar proceso en node
console.log("Memoria libre", os.freemem() / 1024 / 1024);
console.log("Memoria total", os.totalmem() / 1024 / 1024);
console.log("uptime", os.uptime() / 60 / 60 / 24);
