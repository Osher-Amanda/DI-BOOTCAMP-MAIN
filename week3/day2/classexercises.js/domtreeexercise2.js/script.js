// ==========================================
// 1. Access the div node
// ==========================================

// Way 1: Using getElementById
const div1 = document.getElementById("container");
console.log(div1);

// Way 2: Using querySelector
const div2 = document.querySelector("#container"); // # means id
console.log(div2);

// ==========================================
// 2. Access all ul nodes and render all children
// ==========================================

// Way 1: Using getElementsByTagName
const uls1 = document.getElementsByTagName("ul"); // returns HTMLCollection
for (let i = 0; i < uls1.length; i++) {
  console.log("UL #" + (i+1));
  const children = uls1[i].children; // HTMLCollection of li elements
  for (let j = 0; j < children.length; j++) {
    console.log(children[j].textContent);
  }
}

// Way 2: Using querySelectorAll
const uls2 = document.querySelectorAll("ul.list"); // returns NodeList
uls2.forEach((ul, index) => {
  console.log("UL #" + (index+1));
  // ul.children is all li elements
  Array.from(ul.children).forEach(li => console.log(li.textContent));
});

// ==========================================
// 3. Access the first li of each ul
// ==========================================

// Way 1: Using querySelector on each ul
uls2.forEach((ul, index) => {
  const firstLi = ul.querySelector("li"); // selects first li inside ul
  console.log("First li of UL #" + (index+1) + ": " + firstLi.textContent);
});

// Way 2: Using children property
uls2.forEach((ul, index) => {
  const firstLi = ul.children[0]; // first element in children
  console.log("First li of UL #" + (index+1) + ": " + firstLi.textContent);
});


/* Div node
getElementById("container") → selects by ID.
querySelector("#container") → also selects by ID (# = ID).
UL nodes
getElementsByTagName("ul") → returns a live HTMLCollection of all <ul> elements.
querySelectorAll("ul.list") → returns a static NodeList of all <ul> with class list.
.children → gives all direct child elements (<li>).
First LI of each UL
ul.querySelector("li") → selects the first <li> inside that UL.
ul.children[0] → selects the first child element directly. /*

// FOR CSS?? --  console.log(document.querySelectorAll(".list li:first-child"));