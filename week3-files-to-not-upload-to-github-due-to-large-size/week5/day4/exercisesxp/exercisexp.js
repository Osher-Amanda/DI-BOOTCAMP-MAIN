// Exercise XP - Advanced TypeScript Concepts
var personWithAddress = {
    name: "John",
    age: 30,
    street: "Main Street",
    city: "Tel Aviv"
};
console.log("Exercise 1:", personWithAddress);
// Exercise 2 - Type Guards
function describeValue(value) {
    if (typeof value === "number") {
        return "This is a number";
    }
    else {
        return "This is a string";
    }
}
console.log("Exercise 2:", describeValue(10));
console.log("Exercise 2:", describeValue("hello"));
// Exercise 3 - Type Casting
var someValue = "Hello World";
var castedValue = someValue;
console.log("Exercise 3:", castedValue);
// Exercise 4 - Type Assertions with Union Types
function getFirstElement(arr) {
    return arr[0];
}
console.log("Exercise 4:", getFirstElement(["hello", 123, "world"]));
// Exercise 5 - Generic Constraints
function logLength(item) {
    console.log("Exercise 5:", item.length);
}
logLength("Hello");
logLength([1, 2, 3, 4]);
function describeEmployee(emp) {
    if (emp.position === "Manager") {
        return "".concat(emp.name, " is a Manager in ").concat(emp.department);
    }
    else {
        return "".concat(emp.name, " is a Developer in ").concat(emp.department);
    }
}
var employee1 = {
    name: "Alice",
    age: 28,
    position: "Manager",
    department: "HR"
};
var employee2 = {
    name: "Bob",
    age: 25,
    position: "Developer",
    department: "Engineering"
};
console.log("Exercise 6:", describeEmployee(employee1));
console.log("Exercise 6:", describeEmployee(employee2));
// Exercise 7 - Generics + Type Assertions
function formatInput(input) {
    var result = input.toString();
    return "Formatted: ".concat(result);
}
console.log("Exercise 7:", formatInput(123));
console.log("Exercise 7:", formatInput("hello"));
console.log("Exercise 7:", formatInput(true));
