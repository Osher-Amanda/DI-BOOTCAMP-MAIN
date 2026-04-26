/*  Exercise 1: Change the article  */
/* Step 1: Retrieve the h1 element and log it */
// Instruction: "Using a DOM property, retrieve the h1 and console.log it"
// Explanation: We select the first h1 inside the article and print it to the console so we can see it.
const h1 = document.querySelector("article h1");
console.log("Exercise 1 - h1 element:", h1);

/* Step 2: Remove last paragraph in the article */
// Instruction: "Using DOM methods, remove the last paragraph in the <article> tag"
// Explanation: We select all <p> elements inside the article, pick the last one, and remove it.
const article = document.querySelector("article");
const paragraphs = article.querySelectorAll("p");
paragraphs[paragraphs.length - 1].remove();

/* Step 3: Change h2 background to red when clicked */
// Instruction: "Add an event listener which will change the background color of the h2 to red"
// Explanation: We select h2 and add a click event. When clicked, the background color becomes red.
const h2 = article.querySelector("h2");
h2.addEventListener("click", () => {
    h2.style.backgroundColor = "red";
});

/* Step 4: Hide h3 when clicked */
// Instruction: "Add an event listener which will hide the h3 when it’s clicked on"
// Explanation: Select h3 and add a click event. On click, we set display to 'none' to hide it.
const h3 = article.querySelector("h3");
h3.addEventListener("click", () => {
    h3.style.display = "none";
});

/* Step 5: Make all paragraphs bold when button clicked */
// Instruction: "Add a <button> to make text of all paragraphs bold"
// Explanation: We select the button, add a click listener, then loop through all paragraphs and set fontWeight to bold.
const boldButton = document.getElementById("bold-button");
boldButton.addEventListener("click", () => {
    const ps = article.querySelectorAll("p");
    ps.forEach(p => {
        p.style.fontWeight = "bold";
    });
});

/* BONUS Step 6: Random font size for h1 on hover */
// Instruction: "When hovering h1, set font size randomly between 0 and 100"
// Explanation: We listen for mouseover on h1 and set a random size.
h1.addEventListener("mouseover", () => {
    const randomSize = Math.floor(Math.random() * 101);
    h1.style.fontSize = randomSize + "px";
});

/* BONUS Step 7: Fade out 2nd paragraph on hover */
// Instruction: "Hover on 2nd paragraph to fade out"
// Explanation: Add class with CSS transition for smooth fade out.
const secondParagraph = article.querySelectorAll("p")[1];
secondParagraph.addEventListener("mouseover", () => {
    secondParagraph.classList.add("fade-out");
});
secondParagraph.addEventListener("mouseout", () => {
    secondParagraph.classList.remove("fade-out");
});


/*  Exercise 2: Work with forms  */
/* Step 1: Retrieve the form and log it */
const form = document.querySelector("form");
console.log("Exercise 2 - Form element:", form);

/* Step 2: Retrieve inputs by ID and log them */
const fnameInput = document.getElementById("fname");
const lnameInput = document.getElementById("lname");
console.log("Exercise 2 - Inputs by ID:", fnameInput, lnameInput);

/* Step 3: Retrieve inputs by name and log them */
const fnameByName = document.querySelector("input[name='firstname']");
const lnameByName = document.querySelector("input[name='lastname']");
console.log("Exercise 2 - Inputs by name:", fnameByName, lnameByName);

/* Step 4: Add submit event listener */
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page reload
    // Explanation: This keeps the page from refreshing when the form is submitted

    /* Step 5: Get input values and trim spaces */
    const fname = fnameInput.value.trim();
    const lname = lnameInput.value.trim();

    /* Step 6: Make sure values are not empty */
    if (!fname || !lname) {
        alert("Please fill in both fields!");
        return;
    }

    /* Step 7: Create li per input and append to ul */
    const ul = document.querySelector(".usersAnswer");
    const li1 = document.createElement("li");
    li1.textContent = fname;
    const li2 = document.createElement("li");
    li2.textContent = lname;

    ul.appendChild(li1);
    ul.appendChild(li2);

    // Optional: Clear the inputs for next submission
    fnameInput.value = "";
    lnameInput.value = "";
});


/*  Exercise 3: Transform the sentence  */
/* Step 1: Declare global variable to store all bold items */
let allBoldItems;

/* Step 2: Collect all bold items in paragraph */
function getBoldItems() {
    allBoldItems = document.querySelectorAll("#bold-paragraph strong");
}
getBoldItems();

/* Step 3: Highlight function changes color to blue */
function highlight() {
    allBoldItems.forEach(item => item.style.color = "blue");
}

/* Step 4: Return items to default color */
function returnItemsToDefault() {
    allBoldItems.forEach(item => item.style.color = "black");
}

/* Step 5: Add mouseover and mouseout events */
const boldParagraph = document.getElementById("bold-paragraph");
boldParagraph.addEventListener("mouseover", highlight);
boldParagraph.addEventListener("mouseout", returnItemsToDefault);


/*  Exercise 4: Volume of a sphere  */
/* Step 1: Retrieve form and inputs */
const sphereForm = document.getElementById("MyForm");
const radiusInput = document.getElementById("radius");
const volumeInput = document.getElementById("volume");

/* Step 2: Add submit event listener */
sphereForm.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent page reload

    const radius = parseFloat(radiusInput.value);
    if (isNaN(radius)) {
        alert("Please enter a valid number for radius!");
        return;
    }

    /* Step 3: Calculate volume using formula V = 4/3 * π * r^3 */
    const volume = (4/3) * Math.PI * Math.pow(radius, 3);
    volumeInput.value = volume.toFixed(2); // show with 2 decimals
});
