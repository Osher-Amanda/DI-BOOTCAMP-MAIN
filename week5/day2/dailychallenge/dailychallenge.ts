// function to validate if a value matches allowed types

function validateUnionType(value: any, allowedTypes: string[]): boolean {

// loop through allowed types
for (let type of allowedTypes) {

// check if value type matches one of the allowed types
if (typeof value === type) {
return true;
}

}

// if no match found
return false;
}


// TESTS / USAGE

// number test
const test1 = validateUnionType(42, ["string", "number"]);
console.log("Test 1:", test1); // true

// string test
const test2 = validateUnionType("hello", ["boolean", "number"]);
console.log("Test 2:", test2); // false

// boolean test
const test3 = validateUnionType(true, ["boolean", "string"]);
console.log("Test 3:", test3); // true

// array test (important note below)
const test4 = validateUnionType([1,2,3], ["object"]);
console.log("Test 4:", test4); // true (arrays are objects in JS)

// null test (important note below)
const test5 = validateUnionType(null, ["object"]);
console.log("Test 5:", test5); // true (JS quirk)