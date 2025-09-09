// Step 1: Create the array
let names = ["john", "sarah", 23, "Rudolf", 34];

// ------------------- Part 1 -------------------
// Loop through the array and capitalize strings if needed
for (let i = 0; i < names.length; i++) {
    let item = names[i];  // get the current item

    // Check if the item is a string
    if (typeof item !== "string") {
        continue; // skip non-string items
    }

    // Check if the first letter is uppercase
    if (item[0] !== item[0].toUpperCase()) {
        item = item[0].toUpperCase() + item.slice(1); // capitalize first letter
    }

    console.log(item); // display the string
}

// ------------------- Part 2 -------------------
// Loop through the array again
for (let i = 0; i < names.length; i++) {
    let item = names[i];

    // If the item is not a string, exit the loop
    if (typeof item !== "string") {
        break;
    }

    // If it's a string, display it
    console.log(item);
}


/*
Part 1:

for (let i = 0; i < names.length; i++) → loops through every item in the array.

typeof item !== "string" → checks if the item is NOT a string.

continue → skips to the next item in the loop.

item[0].toUpperCase() → converts the first letter of the string to uppercase.

item.slice(1) → gets the rest of the string after the first letter.

console.log(item) → prints the string in the console.

Part 2:

Similar loop, but now break is used:

If the item is not a string, the loop stops immediately.

Otherwise, it prints the string.

 How to run in VS Code:

Save the file as exercise2.js.

Open the terminal in VS Code (View → Terminal or Ctrl + `).

Navigate to the folder where exercise2.js is saved.

Run the file:

node exercise2.js

Check the console output.
*/