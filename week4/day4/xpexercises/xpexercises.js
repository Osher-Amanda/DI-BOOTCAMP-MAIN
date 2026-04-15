// Exercise 1 - Compare to 10

function compareToTen(num) {
return new Promise((resolve, reject) => {

if (num <= 10) {
resolve("Number is less than or equal to 10");
} else {
reject("Number is greater than 10");
}

});
}

// Tests

compareToTen(15)
.then(result => console.log("Exercise 1:", result))
.catch(error => console.log("Exercise 1:", error));

compareToTen(8)
.then(result => console.log("Exercise 1:", result))
.catch(error => console.log("Exercise 1:", error));


// Exercise 2 - Promise resolves after 4 seconds

const delayedPromise = new Promise((resolve) => {

setTimeout(() => {
resolve("success");
}, 4000);

});

delayedPromise.then(result => console.log("Exercise 2:", result));


// Exercise 3 - Resolve & Reject

const resolvedPromise = Promise.resolve(3);
const rejectedPromise = Promise.reject("Boo!");

// handle resolved
resolvedPromise.then(result => console.log("Exercise 3 resolved:", result));

// handle rejected
rejectedPromise.catch(error => console.log("Exercise 3 rejected:", error));


// Exercise 4 - Quiz (no code required)

/*
This exercise is theoretical and does not require coding.
It focuses on understanding how promises behave.
*/