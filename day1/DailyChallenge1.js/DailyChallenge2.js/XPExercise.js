// Part I - Review about arrays
const people = ["Greg", "Mary", "Devon", "James"];

// Remove "Greg" from the people array
people.shift(); // shift() removes the first element
console.log(people); // ["Mary", "Devon", "James"]

// Replace "James" with "Jason"
people[people.indexOf("James")] = "Jason";
console.log(people); // ["Mary", "Devon", "Jason"]

// Add your name to the end of the array
people.push("Osher"); // replace "Osher" with your name
console.log(people); // ["Mary", "Devon", "Jason", "Osher"]

// Console.log Mary’s index
console.log(people.indexOf("Mary")); // 0

// Make a copy of the array without "Mary" and your name
const copyPeople = people.slice(1, people.length - 1); // slice(start, end) excludes the end index
console.log(copyPeople); // ["Devon", "Jason"]

// Find the index of "Foo"
console.log(people.indexOf("Foo")); // -1 because "Foo" is not in the array

// Get the last element of the array
const last = people[people.length - 1];
console.log(last); // "Osher"