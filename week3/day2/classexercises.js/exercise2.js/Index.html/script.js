// Step 1: Create a function that takes myAge as a parameter
function getMumAge(myAge) {
    // Step 2: Calculate mum's age (twice your age)
    let mumAge = myAge * 2;

    // Step 3: Return the result to the global scope
    return mumAge;
}

// Step 4: Call the function and store the result
let mumAgeResult = getMumAge(20); // Replace 20 with your actual age

// Step 5: Log the result in the console
console.log("My mum is " + mumAgeResult + " years old");