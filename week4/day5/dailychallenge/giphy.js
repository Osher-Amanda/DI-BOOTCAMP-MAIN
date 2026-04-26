// API key provided by exercise
const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// DOM elements
const form = document.getElementById("gifForm");
const input = document.getElementById("searchInput");
const container = document.getElementById("gifContainer");
const deleteAllBtn = document.getElementById("deleteAll");


// Function using async/await + fetch API
async function fetchGif(category) {
try {

// fetch random gif from Giphy API
const response = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${category}&api_key=${apiKey}`);

const data = await response.json();

// get gif image url from nested object
const gifUrl = data.data.images.original.url;

// create gif element
createGif(gifUrl);

} catch (error) {
console.log("Error fetching gif:", error);
}
}


// Function to display gif on page
function createGif(url) {

// create wrapper div
const gifDiv = document.createElement("div");

// create image
const img = document.createElement("img");
img.src = url;
img.style.width = "200px";

// create delete button
const delBtn = document.createElement("button");
delBtn.textContent = "DELETE";

// delete single gif
delBtn.addEventListener("click", function () {
gifDiv.remove();
});

// append elements
gifDiv.appendChild(img);
gifDiv.appendChild(delBtn);
container.appendChild(gifDiv);
}


// form submit event
form.addEventListener("submit", function (e) {
e.preventDefault();

const category = input.value.trim();

if (category === "") return;

fetchGif(category);

input.value = "";
});


// delete all gifs
deleteAllBtn.addEventListener("click", function () {
container.innerHTML = "";
});