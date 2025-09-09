const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// Get first letter of each name
let firstLetters = [];
for (let i = 0; i < names.length; i++) {
  firstLetters.push(names[i][0]);
}

// Sort alphabetically
firstLetters.sort();

// Join into a string
const secretSociety = firstLetters.join("");
console.log(secretSociety); // "ABJKPS"