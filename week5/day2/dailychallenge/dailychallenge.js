// function to validate if a value matches allowed types
function validateUnionType(value, allowedTypes) {
    // loop through allowed types
    for (var _i = 0, allowedTypes_1 = allowedTypes; _i < allowedTypes_1.length; _i++) {
        var type = allowedTypes_1[_i];
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
var test1 = validateUnionType(42, ["string", "number"]);
console.log("Test 1:", test1); // true
// string test
var test2 = validateUnionType("hello", ["boolean", "number"]);
console.log("Test 2:", test2); // false
// boolean test
var test3 = validateUnionType(true, ["boolean", "string"]);
console.log("Test 3:", test3); // true
// array test (important note below)
var test4 = validateUnionType([1, 2, 3], ["object"]);
console.log("Test 4:", test4); // true (arrays are objects in JS)
// null test (important note below)
var test5 = validateUnionType(null, ["object"]);
console.log("Test 5:", test5); // true (JS quirk)
