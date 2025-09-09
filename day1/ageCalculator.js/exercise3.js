// Step 1: Create a numerically indexed array called pets
let pets = ['cat', 'dog', 'fish', 'rabbit', 'cow'];  
// Explanation: Arrays are lists of items. Each item has an index starting from 0.
// Index 0 → 'cat', Index 1 → 'dog', Index 2 → 'fish', Index 3 → 'rabbit', Index 4 → 'cow'

// Step 2: Display 'dog'
// The index of 'dog' is 1
console.log(pets[1]);  
// Explanation: Array elements are accessed using square brackets and the index number.

// Step 3: Add 'horse' to the array
pets.push('horse');  
// Explanation: push() adds an item to the end of the array.

// Step 3b: Remove 'rabbit' from the array
// 'rabbit' is at index 3
pets.splice(3, 1);  
// Explanation: splice(index, numberOfItems) removes elements from an array starting at the given index.
// Here, we remove 1 item at index 3, which is 'rabbit'.

// Step 4: Display the length of the array
console.log(pets.length);  
// Explanation: length returns the number of items currently in the array.