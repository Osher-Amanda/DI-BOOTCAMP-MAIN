// Step 1: I created a function that takes myAge as a parameter
function calculateFamilyAges(myAge) {

    // Step 2: Calculate my mum's age
    // Mum is twice my age
    let mumAge = myAge * 2;

    // Step 3: Calculate my dad's age
    // Dad is 1.2 times my mum's age
    let dadAge = mumAge * 1.2;

    // Step 4: Print the ages in the console
    console.log("My mum is " + mumAge + " years old");
    console.log("My dad is " + dadAge + " years old");
}

// Step 5: Call the function with your age
calculateFamilyAges(20); // Replace 20 with your actual age

