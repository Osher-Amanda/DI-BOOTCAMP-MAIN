// Prompt the user for a number
let number = parseInt(prompt("Enter a number")); // parseInt converts string to number

// While the number is smaller than 10, keep asking
while (number < 10) {
  number = parseInt(prompt("Enter a number greater than or equal to 10"));
}