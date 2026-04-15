// - Exercise 1 : Colors
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Loop through the array using forEach (it goes through each element in the array)
colors.forEach((color, index) => {
  // index starts at 0, so we add +1 to start from 1
  console.log(`${index + 1}# choice is ${color}.`);
});

// Check if at least one element is "Violet"
if (colors.includes("Violet")) {
  console.log("Yeah"); // if "Violet" exists in the array
} else {
  console.log("No..."); // if it does not exist
}

// 

// - Exercise 2 : Colors #2
const ordinal = ["th","st","nd","rd"];

colors.forEach((color, index) => {
  let num = index + 1; // position in the list

  // Decide which ending to use (st, nd, rd, th)
  let suffix = 
    num === 1 ? ordinal[1] : // 1st
    num === 2 ? ordinal[2] : // 2nd
    num === 3 ? ordinal[3] : // 3rd
    ordinal[0];              // everything else gets "th"

  console.log(`${num}${suffix} choice is ${color}.`);
});

// 

// - Exercise 3 : Analyzing

// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

// The spread operator (...) takes elements out of the array and puts them here
const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// Output: ['bread','carrot','potato','chicken','apple','orange']

// ------2------
const country = "USA";
console.log([...country]);
// Output: ['U','S','A']
// Strings can be spread into individual letters

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);
// Output: [undefined, undefined]
// The array had 2 empty slots, spread keeps them as "undefined"

// 

// - Exercise 4 : Employees
const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];

// 1. map() creates a new array with "Hello <firstName>"
const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeStudents);

// 2. filter() keeps only the "Full Stack Resident" users
const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');
console.log(fullStackResidents);

// 3. Bonus: filter + map = last names of Full Stack Residents
const lastNamesFSR = users
  .filter(user => user.role === 'Full Stack Resident')
  .map(user => user.lastName);
console.log(lastNamesFSR);

// 

// - Exercise 5 : Star Wars
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// reduce() combines everything into one string
const story = epic.reduce((acc, word) => acc + " " + word);
console.log(story); 
// Output: "a long time ago in a galaxy far far away"

// 

// - Exercise 6 : Employees #2
const students = [
  {name: "Ray", course: "Computer Science", isPassed: true}, 
  {name: "Liam", course: "Computer Science", isPassed: false}, 
  {name: "Jenner", course: "Information Technology", isPassed: true}, 
  {name: "Marco", course: "Robotics", isPassed: true}, 
  {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
  {name: "Jamie", course: "Big Data", isPassed: false}
];

// Filter only students who passed
const passedStudents = students.filter(student => student.isPassed);
console.log(passedStudents);

// Bonus: chain filter with forEach to congratulate
students
  .filter(student => student.isPassed)
  .forEach(student => {
    console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
  });
