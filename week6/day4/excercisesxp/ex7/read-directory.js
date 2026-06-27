const fs = require("fs");

// read all files in current folder
const files = fs.readdirSync("./");

console.log("Files in folder:");
console.log(files);