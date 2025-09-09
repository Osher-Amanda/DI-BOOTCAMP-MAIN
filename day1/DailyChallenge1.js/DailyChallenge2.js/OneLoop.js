// Step 1: Decide how many rows we want
let rows = 6;  // This number can be changed to make it taller or shorter.  I am leaving it with 6 to match with that on tyhe exercise description

// Step 2: Start with an empty string (this will collect stars row by row)
let stars = "";

// Step 3: Loop from 1 up to the number of rows
for (let i = 1; i <= rows; i++) {
  // Add one star plus a space each time
  stars += "* ";
  // let i = 1 → start counting at 1
// 'i' is called the loop variable.It keeps track of which step we’re on.

// i <= rows → keep looping as long as i is less than or equal to rows
// In our example, rows = 6, so the loop will run when i = 1, 2, 3, 4, 5, 6

// i++ → increase i by 1 after each loop
// This ensures the loop eventually stops

  // Print the current line
  console.log(stars);
}



