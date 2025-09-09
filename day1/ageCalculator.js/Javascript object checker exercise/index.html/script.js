// Step 1: Create an object with username and password
let user = {
    username: "Osher123",  // replace with any string you like
    password: "OAF456"   // replace with any string you like
};
// Explanation: Objects in JS store key-value pairs. Here 'username' and 'password' are keys.

// Step 2: Create an array called "database" that contains the user object
let database = [user];
// Explanation: Arrays store lists of items. Here we put the user object inside the array.

// Step 3: Create an array called "newsfeed" with 3 objects
let newsfeed = [
    {username: "Alice", timeline: "Hello world!"},
    {username: "Bob", timeline: "JavaScript is fun!"},
    {username: "Charlie", timeline: "I love coding!"}
];
// Explanation: Each item in the newsfeed array is an object with 'username' and 'timeline' properties.

// Optional: Display database and newsfeed in console
console.log("Database:", database);
console.log("Newsfeed:", newsfeed);
