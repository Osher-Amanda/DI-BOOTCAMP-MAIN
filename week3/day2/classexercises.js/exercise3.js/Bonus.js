// Step 1: We create the same arrow function but with ternary operators
const calculatorTernary = (num1, num2, operator) => 
  operator === "+" ? num1 + num2 :
  operator === "-" ? num1 - num2 :
  operator === "*" ? num1 * num2 :
  operator === "/" ? num1 / num2 :
  "Invalid operator"; // if none of the above, return "Invalid operator"

// Step 2: Test the ternary version
console.log(calculatorTernary(8, 2, "+")); // 10
console.log(calculatorTernary(8, 2, "-")); // 6
console.log(calculatorTernary(8, 2, "*")); // 16
console.log(calculatorTernary(8, 2, "/")); // 4
console.log(calculatorTernary(8, 2, "%")); // Invalid operator