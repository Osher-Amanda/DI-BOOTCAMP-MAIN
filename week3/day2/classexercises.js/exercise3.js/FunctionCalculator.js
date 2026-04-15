// Step 1: Create an arrow function that takes 3 parameters: num1, num2, operator
const calculator = (num1, num2, operator) => {
  
  // Step 2: Perform calculation based on the operator
  if (operator === "+") {
    return num1 + num2; // addition
  } else if (operator === "-") {
    return num1 - num2; // subtraction
  } else if (operator === "*") {
    return num1 * num2; // multiplication
  } else if (operator === "/") {
    return num1 / num2; // division
  } else {
    return "Invalid operator"; // if the operator is not recognized
  }
};

// Step 3: We test the function by calling it
console.log(calculator(10, 5, "+")); // 15
console.log(calculator(10, 5, "-")); // 5
console.log(calculator(10, 5, "*")); // 50
console.log(calculator(10, 5, "/")); // 2
console.log(calculator(10, 5, "%")); // Invalid operator
