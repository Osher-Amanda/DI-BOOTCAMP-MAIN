// Exercise 1 - Hello World
console.log("Hello, World!");
// Exercise 2 - Type Annotations
var age = 25;
var userName = "Alice";
console.log("Exercise 2:", age, userName);
// Exercise 3 - Union Types
var id;
id = 101;
console.log("Exercise 3:", id);
id = "ABC123";
console.log("Exercise 3:", id);
// Exercise 4 - if...else control flow
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    }
    else if (num < 0) {
        return "Negative";
    }
    else {
        return "Zero";
    }
}
console.log("Exercise 4:", checkNumber(5));
console.log("Exercise 4:", checkNumber(-3));
console.log("Exercise 4:", checkNumber(0));
// Exercise 5 - Tuple
function getDetails(name, age) {
    return [name, age, "Hello, ".concat(name, "! You are ").concat(age, " years old.")];
}
var details = getDetails("Alice", 25);
console.log("Exercise 5:", details);
function createPerson(name, age) {
    return { name: name, age: age };
}
var person = createPerson("John", 30);
console.log("Exercise 6:", person);
// Exercise 7 - Type Assertions (DOM)
// NOTE: This works in browser environment, not Node
var inputElement = document.getElementById("myInput");
if (inputElement) {
    inputElement.value = "Hello from TypeScript";
}
// Exercise 8 - Switch Statement
function getAction(role) {
    switch (role) {
        case "admin":
            return "Manage users and settings";
        case "editor":
            return "Edit content";
        case "viewer":
            return "View content";
        case "guest":
            return "Limited access";
        default:
            return "Invalid role";
    }
}
console.log("Exercise 8:", getAction("admin"));
console.log("Exercise 8:", getAction("editor"));
console.log("Exercise 8:", getAction("viewer"));
console.log("Exercise 8:", getAction("guest"));
console.log("Exercise 8:", getAction("unknown"));
function greet(name) {
    if (name) {
        return "Hello, ".concat(name, "!");
    }
    else {
        return "Hello!";
    }
}
console.log("Exercise 9:", greet());
console.log("Exercise 9:", greet("Alice"));
