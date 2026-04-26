// 
// 
fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
.then(response => {

// check if request worked
if (!response.ok) {
throw new Error("HTTP error " + response.status);
}

// convert response to JS object
return response.json();
})
.then(data => {

// log full JS object from API
console.log("Exercise 1 Result:", data);

})
.catch(error => {

// catch any error that happens
console.log("Error:", error);
});


// 
// EXERCISE 2 - GIPHY FETCH (SUN, LIMIT 10, OFFSET 2)
// 
fetch("https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
.then(response => {

if (!response.ok) {
throw new Error("HTTP error " + response.status);
}

return response.json();
})
.then(data => {

console.log("Exercise 2 Result:", data);

})
.catch(error => {

console.log("Error:", error);
});


// 
// EXERCISE 3 - ASYNC/AWAIT VERSION
// 

async function getStarship() {

try {

// fetch starship data
const response = await fetch("https://www.swapi.tech/api/starships/9/");

// check response status
if (!response.ok) {
throw new Error("HTTP error " + response.status);
}

// convert to JS object
const objectStarWars = await response.json();

// log result
console.log("Exercise 3 Result:", objectStarWars.result);

} catch (error) {

console.log("Error:", error);

}

}

// run async function
getStarship();


// 
// EXERCISE 4 - ANALYZE CODE
// 
/*
WHAT WILL HAPPEN:

1. "calling" prints immediately
2. function waits 2 seconds
3. then prints "resolved"
*/

function resolveAfter2Seconds() {
return new Promise(resolve => {
setTimeout(() => {
resolve("resolved");
}, 2000);
});
}

async function asyncCall() {
console.log("calling");

let result = await resolveAfter2Seconds();

console.log(result);
}

asyncCall();