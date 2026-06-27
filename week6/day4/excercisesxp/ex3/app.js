const { readFile, writeFile } = require("./fileManager");

const data = readFile("./HelloWorld.txt");
console.log("READ:", data);

writeFile("./ByeWorld.txt", "Writing to the file");

console.log("Done!");