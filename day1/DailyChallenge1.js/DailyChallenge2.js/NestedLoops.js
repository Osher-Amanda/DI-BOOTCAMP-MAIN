// The goal with the nested loops version is to Do the same thing, but this time with 1 loop inside another

let rows2 = 6;  // Same as with 1 loop, number of rows

// Outer loop → decides how many lines to print
for (let i = 1; i <= rows2; i++) {
    // Purpose: Controls how many lines will be printed.
//i starts at 1 and increases by 1 each time (i++).
//The loop runs as long as i <= rows2.
  
  // Start with an empty string for each line
  let line = "";
  //At the start of each line, we reset line to an empty string , this is so we build each line fresh, instead of carrying stars from the previous line.
  
  // Inner loop → adds stars to the current line
  for (let j = 1; j <= i; j++) {
    line += "* ";
  }
  // 'j' is another loop variable, separate from 'i'
// 'j' goes from 1 up to 'i' (the current line number), eg.
// On the 1st line (i = 1), j runs once → 1 star
// On the 2nd line (i = 2), j runs twice → 2 stars
// On the 3rd line (i = 3), j runs three times → 3 stars
  
  // Print the line after inner loop finishes
  console.log(line);
}
