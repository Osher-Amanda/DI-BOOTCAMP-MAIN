// Exercise XP - Advanced TypeScript Concepts


// Exercise 1 - Intersection Types

type Person = {
name: string;
age: number;
};

type Address = {
street: string;
city: string;
};

type PersonWithAddress = Person & Address;

const personWithAddress: PersonWithAddress = {
name: "John",
age: 30,
street: "Main Street",
city: "Tel Aviv"
};

console.log("Exercise 1:", personWithAddress);


// Exercise 2 - Type Guards

function describeValue(value: number | string): string {

if (typeof value === "number") {
return "This is a number";
} else {
return "This is a string";
}

}

console.log("Exercise 2:", describeValue(10));
console.log("Exercise 2:", describeValue("hello"));


// Exercise 3 - Type Casting

let someValue: any = "Hello World";

let castedValue: string = someValue as string;

console.log("Exercise 3:", castedValue);


// Exercise 4 - Type Assertions with Union Types

function getFirstElement(arr: (number | string)[]): string {

return arr[0] as string;

}

console.log("Exercise 4:", getFirstElement(["hello", 123, "world"]));


// Exercise 5 - Generic Constraints

function logLength<T extends { length: number }>(item: T): void {

console.log("Exercise 5:", item.length);

}

logLength("Hello");
logLength([1, 2, 3, 4]);


// Exercise 6 - Intersection Types + Type Guards

type Job = {
position: string;
department: string;
};

type Employee = Person & Job;

function describeEmployee(emp: Employee): string {

if (emp.position === "Manager") {
return `${emp.name} is a Manager in ${emp.department}`;
} else {
return `${emp.name} is a Developer in ${emp.department}`;
}

}

const employee1: Employee = {
name: "Alice",
age: 28,
position: "Manager",
department: "HR"
};

const employee2: Employee = {
name: "Bob",
age: 25,
position: "Developer",
department: "Engineering"
};

console.log("Exercise 6:", describeEmployee(employee1));
console.log("Exercise 6:", describeEmployee(employee2));


// Exercise 7 - Generics + Type Assertions

function formatInput<T extends { toString(): string }>(input: T): string {

const result = input.toString() as string;

return `Formatted: ${result}`;

}

console.log("Exercise 7:", formatInput(123));
console.log("Exercise 7:", formatInput("hello"));
console.log("Exercise 7:", formatInput(true));