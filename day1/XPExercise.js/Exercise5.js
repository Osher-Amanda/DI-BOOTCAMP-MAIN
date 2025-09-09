// Create a family object
const family = {
  dad: "John",
  mom: "Jane",
  sister: "Emily",
  brother: "Tom"
};

// Log all keys
for (let key in family) {
  console.log(key);
}

// Log all values
for (let key in family) {
  console.log(family[key]);
}
