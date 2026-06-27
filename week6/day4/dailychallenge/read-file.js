const fs = require("fs");

function readFile() {
const data = fs.readFileSync("./files/file-data.txt", "utf-8");
console.log(data);
}

module.exports = readFile;