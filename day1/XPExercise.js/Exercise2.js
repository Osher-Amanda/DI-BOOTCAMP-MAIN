// Create an array of 5 favorite colors
const colors = ["blue", "red", "green", "yellow", "purple"];

// Loop through and print choices
for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i+1} choice is ${colors[i]}`);
}

// Bonus: Correct suffixes
const suffixes = ["st", "nd", "rd", "th", "th"];
for (let i = 0; i < colors.length; i++) {
  console.log(`My ${i+1}${suffixes[i]} choice is ${colors[i]}`);
}