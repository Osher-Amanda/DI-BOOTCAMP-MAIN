/*  Exercise 1: Timer */

/* Part I: Alert "Hello World" after 2 seconds */
setTimeout(() => {
    // Instruction: Use setTimeout to call a function after 2 seconds
    // Explanation: This will show an alert 2 seconds after the page loads
    alert("Hello World");
}, 2000);

/* Part II: Add a paragraph <p>Hello World</p> after 2 seconds */
setTimeout(() => {
    // Instruction: Add a new paragraph to the container
    // Explanation: We create a <p> element, set its text, and append it to the container div
    const container = document.getElementById("container");
    const p = document.createElement("p");
    p.textContent = "Hello World";
    container.appendChild(p);
}, 2000);

/* Part III: Add paragraphs every 2 seconds using setInterval */
const container = document.getElementById("container");

const interval = setInterval(() => {
    // Create a new paragraph
    const p = document.createElement("p");
    p.textContent = "Hello World";
    container.appendChild(p);

    // Stop interval automatically when there are 5 paragraphs
    if (container.querySelectorAll("p").length >= 5) {
        clearInterval(interval);
    }
}, 2000);

// Stop interval when user clicks "Clear Interval" button
const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
    clearInterval(interval);
});


/* Exercise 2: Move the Box  */

// Instruction: Move the red box 1px to the right every millisecond when button clicked
const animateButton = document.getElementById("moveButton");
const box = document.getElementById("animate");
const boxContainer = document.getElementById("box-container");

animateButton.addEventListener("click", () => {
    let position = 0; // starting position in pixels
    const maxPosition = boxContainer.clientWidth - box.clientWidth; // stop at right edge

    const moveInterval = setInterval(() => {
        if (position >= maxPosition) {
            // Stop moving when box reaches the right edge
            clearInterval(moveInterval);
        } else {
            position += 1; // move 1px to the right
            box.style.left = position + "px"; // update CSS left property
        }
    }, 1); // every 1 millisecond
});
