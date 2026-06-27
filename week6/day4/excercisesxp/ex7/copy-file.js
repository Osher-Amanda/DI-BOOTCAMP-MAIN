const fs = require("fs");

// read from source.txt
const data = fs.readFileSync("source.txt", "utf-8");

// write into destination.txt
fs.writeFileSync("destination.txt", data);

console.log("File copied successfully!");