// Exercise 1: Scope Predictions

// #1
// Prediction: a will be 3. 
// Explanation: 'a' starts as 5, but the 'if' condition is true, so it gets updated to 3.
// #1.2: If declared with const, it would throw an ERROR because you cannot reassign a const.

// #2
// Prediction: First call (funcThree) is 0. Second call (after funcTwo) is 5.
// Explanation: funcTwo updates the global variable 'a' to 5.
// #2.2: If const, funcTwo would throw an ERROR.

// #3
// Prediction: a will be "hello".
// Explanation: window.a creates a global variable available everywhere.

// #4
// Prediction: a will be "test".
// Explanation: The 'let a' inside the function is a "local" variable. It hides the global 'a'.
// #4.2: If const, it works exactly the same (local scope still wins).

// #5
// Prediction: Inside will be 5, Outside will be 2.
// Explanation: 'let' inside the { } block stays inside that block.
// #5.2: If const, it works the same way (block scoping).


// Exercise 2: Ternary Operator
const winBattle = () => true;
const experiencePoints = winBattle() ? 10 : 1;
console.log(`Experience Points: ${experiencePoints}`);


// Exercise 3: Is it a string?
const isString = (value) => typeof value === 'string';

console.log(isString('hello')); // true
console.log(isString([1, 2, 4, 0])); // false


// Exercise 4: Find the sum
const sum = (a, b) => a + b;


// Exercise 5: Kg and grams
// 1. Function declaration
function toGramsDeclaration(kg) { return kg * 1000; }
console.log(toGramsDeclaration(2));

// 2. Function expression
const toGramsExpression = function(kg) { return kg * 1000; };
console.log(toGramsExpression(2));

// Difference: Declarations are "hoisted" (loaded first), while expressions are not.

// 3. Arrow function
const toGramsArrow = kg => kg * 1000;


// Exercise 6: Fortune teller
(function(children, partner, location, job) {
    const sentence = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
    document.body.innerHTML += `<p>${sentence}</p>`;
})(2, "Alex", "Tel Aviv", "Web Developer");


// Exercise 7: Welcome
(function(userName) {
    const navbar = document.querySelector(".navbar"); // Assumes <nav class="navbar"></nav> exists
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `<span>Welcome, ${userName}</span><img src="profile.jpg" style="width:50px;">`;
    if (navbar) navbar.appendChild(userDiv);
})("John");


// Exercise 8: Juice Bar
function makeJuice(size) {
    const ingredients = [];

    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }

    function displayJuice() {
        const sentence = `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
        document.body.innerHTML += `<p>${sentence}</p>`;
    }

    addIngredients("Apple", "Ginger", "Lemon");
    addIngredients("Carrot", "Kale", "Mint");
    displayJuice();
}

makeJuice("large");

// Explanation:
// 1. Closures: The inner functions "remember" the 'ingredients' array from the outer function.
// 2. .join(", "): This turns the array of 6 items into a nice readable string.