// Daily Challenge: Stars Pattern

// --- Method 1: Using One Loop ---
console.log("Method 1: One Loop");

let stars = "";
for (let i = 0; i < 6; i++) {
    // Each time the loop runs, we add one star and a space to our string
    stars = stars + "* ";
    console.log(stars);
}

// Explanation:
// 1. We start with an empty string called 'stars'.
// 2. The loop runs 6 times.
// 3. Every time it runs, it adds a new star to the existing string and prints it.


// --- Method 2: Using Two Nested Loops ---
console.log("\nMethod 2: Nested Loops");

for (let i = 1; i <= 6; i++) {
    let row = "";
    // The inner loop runs 'i' times (1st row once, 2nd row twice, etc.)
    for (let j = 0; j < i; j++) {
        row = row + "* ";
    }
    console.log(row);
}

// Explanation for myself to remember the logic later on:
// 1. The outer loop (i) keeps track of which row we are on.
// 2. The inner loop (j) is responsible for building the stars for that specific row.
// 3. Because 'j' stops when it reaches 'i', row #3 gets exactly 3 stars.