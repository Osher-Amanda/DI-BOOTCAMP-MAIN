//Exercise 1 : Find the numbers divisible by 23
// Function without parameters
function displayNumbersDivisible() {
  let sum = 0; // we'll use this to keep track of the total sum

  // Loop from 0 up to 500
  for (let i = 0; i <= 500; i++) {
    // Check if i can be divided by 23 without a remainder
    if (i % 23 === 0) {
      console.log(i); // print the number
      sum += i;       // add it to our running sum
    }
  }

  // After the loop, print the total sum
  console.log("Sum:", sum);
}

// Call the function
displayNumbersDivisible();


// Bonus: function with a parameter
function displayNumbersDivisibleBy(divisor) {
  let sum = 0;

  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      console.log(i);
      sum += i;
    }
  }

  console.log("Sum:", sum);
}

// Examples
displayNumbersDivisibleBy(3);
displayNumbersDivisibleBy(45);

/*Explanation for myself:

let sum = 0; → we start at zero because we haven’t added anything yet.

for (let i = 0; i <= 500; i++) { ... } → i begins at 0, increases by 1 each time, and stops when it reaches 500.

if (i % 23 === 0) → % means “remainder after division.” If the remainder is zero, the number is divisible by 23.

console.log(i) → prints the number to the console.

sum += i; → adds the number to our total sum.

After the loop, we print the sum.

The bonus version lets you choose the divisor instead of always 23.*/


//Exercise 2 : Shopping List
// Data about what’s in stock and the price of each fruit
const stock = { 
  "banana": 6, 
  "apple": 0,
  "pear": 12,
  "orange": 32,
  "blueberry": 1
};

const prices = {    
  "banana": 4, 
  "apple": 2, 
  "pear": 1,
  "orange": 1.5,
  "blueberry": 10
};

// The things we want to buy
const shoppingList = ["banana", "orange", "apple"];

function myBill() {
  let total = 0;

  for (let i = 0; i < shoppingList.length; i++) {
    let item = shoppingList[i];

    // Check if item exists in stock and if there’s at least 1 available
    if (stock[item] > 0) {
      total += prices[item]; // add its price to the total
      stock[item]--; // decrease stock by 1 (bonus part)
    }
  }

  return total;
}

// Call the function and log the result
console.log("Total bill:", myBill());

/*Explanation :
We have two objects: stock tells how many items are left, prices tells how much each costs.

shoppingList is just the fruits we want.

In the function myBill(), we loop through shoppingList.

stock[item] > 0 → means we can only buy it if there’s at least one left.

total += prices[item] → adds that item’s price to our running total.

stock[item]-- → reduces the stock of that fruit by 1, so we don’t pretend to have unlimited items.

At the end we return the total.*/

//Exercise 3 : What’s in my wallet?
function changeEnough(itemPrice, amountOfChange) {
  // amountOfChange = [quarters, dimes, nickels, pennies]

  const quartersValue = 0.25 * amountOfChange[0];
  const dimesValue = 0.10 * amountOfChange[1];
  const nickelsValue = 0.05 * amountOfChange[2];
  const penniesValue = 0.01 * amountOfChange[3];

  const totalChange = quartersValue + dimesValue + nickelsValue + penniesValue;

  return totalChange >= itemPrice;
}

// Examples
console.log(changeEnough(4.25, [25, 20, 5, 0])); // true
console.log(changeEnough(14.11, [2, 100, 0, 0])); // false
console.log(changeEnough(0.75, [0, 0, 20, 5])); // true

/*Explanation :

We multiply the number of each coin by its value.

Then we add them all up to get the total money in your pocket.

Finally, check if it’s at least as much as the item price:

If yes, return true.

If not, return false.

Finally, check if it’s at least as much as the item price:

If yes, return true.

If not, return false.*/


//Exercise 4 : Vacations Costs
function hotelCost() {
  let nights;
  do {
    nights = prompt("How many nights do you want to stay?");
  } while (isNaN(nights) || nights === "");

  return nights * 140;
}

function planeRideCost() {
  let destination;
  do {
    destination = prompt("What is your destination?");
  } while (!isNaN(destination) || destination === "");

  if (destination === "London") return 183;
  if (destination === "Paris") return 220;
  return 300;
}

function rentalCarCost() {
  let days;
  do {
    days = prompt("How many days do you want to rent the car?");
  } while (isNaN(days) || days === "");

  let cost = days * 40;
  if (days > 10) {
    cost *= 0.95; // apply 5% discount
  }
  return cost;
}

function totalVacationCost() {
  const hotel = hotelCost();
  const plane = planeRideCost();
  const car = rentalCarCost();

  console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}`);
  return hotel + plane + car;
}

totalVacationCost();

/*Explanation :
Each function asks for user input using prompt().

We check if the input is valid (not empty, correct type). If not, we ask again.

Hotel: nights * 140.

Plane: depends on destination.

Car: days * 40, with a discount if over 10 days.

The totalVacationCost calls the three functions and prints out the breakdown.*/


//Exercise 5 : Users-Make a HTML file for this one


//Exercise 5: Script
// Retrieve the div
let div = document.getElementById("container");
console.log(div);

// Change "Pete" to "Richard"
document.querySelector("ul li:nth-child(2)").textContent = "Richard";

// Delete the second <li> of the second <ul>
document.querySelectorAll("ul")[1].children[1].remove();

// Change the first <li> of each <ul> to your name
let uls = document.querySelectorAll("ul");
uls.forEach(ul => {
  ul.firstElementChild.textContent = "Osher"; // use your own name
});

// Add classes
uls.forEach(ul => ul.classList.add("student_list"));
uls[0].classList.add("university", "attendance");

// Style div
div.style.backgroundColor = "lightblue";
div.style.padding = "10px";

// Hide the <li> that contains "Dan"
uls[1].lastElementChild.style.display = "none";

// Add border to "Richard"
document.querySelector("ul li:nth-child(2)").style.border = "1px solid black";

// Change font size of whole body
document.body.style.fontSize = "20px";

// Bonus: if background is light blue, alert names
if (div.style.backgroundColor === "lightblue") {
  alert("Hello John and Richard");
}


//Exercise 6 : Change the Navbar

