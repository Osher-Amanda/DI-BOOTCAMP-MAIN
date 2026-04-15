// Select elements
const colorPalette = document.getElementById('color-palette');
const gridContainer = document.getElementById('grid-container');
const clearBtn = document.getElementById('clear-btn');

// Dynamic colors
const colorOptions = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'black', 'brown'];
let selectedColor = 'red'; // default color
let mouseDown = false;

// Generate flower-shaped color palette
colorOptions.forEach(color => {
    const colorDiv = document.createElement('div');
    colorDiv.classList.add('color');
    colorDiv.style.backgroundColor = color;
    colorPalette.appendChild(colorDiv);

    colorDiv.addEventListener('click', () => {
        selectedColor = color;
    });
});

// Generate 16x16 grid of squares
for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    gridContainer.appendChild(square);
}

// Select all squares
const squares = document.querySelectorAll('.square');

// Drawing logic
gridContainer.addEventListener('mousedown', () => mouseDown = true);
gridContainer.addEventListener('mouseup', () => mouseDown = false);

squares.forEach(square => {
    square.addEventListener('mousedown', () => paintHeart(square));
    square.addEventListener('mouseover', () => {
        if (mouseDown) paintHeart(square);
    });
});

// Function to paint a heart inside a square
function paintHeart(square) {
    square.innerHTML = ''; // remove any existing heart
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.backgroundColor = selectedColor;
    square.appendChild(heart);
}

// Clear grid functionality
clearBtn.addEventListener('click', () => {
    squares.forEach(square => square.innerHTML = '');
});



/* Explanation:
1. colorPalette: container for flower colors.
2. gridContainer: container for drawing squares.
3. selectedColor: tracks which color is active.
4. mouseDown: allows drawing while dragging the mouse.
5. paintHeart(): creates a heart div inside a square when clicked or hovered.
6. Clear button removes all hearts.
7. The grid is generated dynamically with JS so you can easily change the size if needed.
*/
