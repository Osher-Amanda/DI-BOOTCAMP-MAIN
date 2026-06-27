const _ = require("lodash");
const math = require("./math");

console.log("Add:", math.add(2, 3));
console.log("Multiply:", math.multiply(4, 5));

console.log("Lodash shuffle:", _.shuffle([1, 2, 3, 4, 5]));