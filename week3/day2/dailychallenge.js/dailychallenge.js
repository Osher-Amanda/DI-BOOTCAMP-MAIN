// Exercise: Solar System DOM

// 1. Create an array of objects for the planets
const planets = [
    { name: "Mercury", color: "gray", moons: 0 },
    { name: "Venus", color: "orange", moons: 0 },
    { name: "Earth", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "brown", moons: 79 },
    { name: "Saturn", color: "yellow", moons: 82 },
    { name: "Uranus", color: "lightblue", moons: 27 },
    { name: "Neptune", color: "darkblue", moons: 14 }
];

// 2. Select the section where we will append the planets
const section = document.querySelector(".listPlanets");

// 3. Loop through the array to create each planet
for (let planet of planets) {
    // Create the planet div
    const planetDiv = document.createElement("div");
    
    // Add the required "planet" class and set the background color
    planetDiv.classList.add("planet");
    planetDiv.style.backgroundColor = planet.color;
    
    // Add the name of the planet as text inside the div
    planetDiv.innerText = planet.name;
    
    // --- Bonus: Create the moons ---
    for (let i = 0; i < planet.moons; i++) {
        const moonDiv = document.createElement("div");
        moonDiv.classList.add("moon");
        
        // We shift the moons to the right so they aren't all on top of each other
        // This spreads them out based on their index (i)
        moonDiv.style.left = (i * 10) + "px";
        
        // Append the moon to the planet
        planetDiv.appendChild(moonDiv);
    }

    // 4. Append the finished planet to the section
    section.appendChild(planetDiv);
}

// Explanation for myself:
// 1. document.createElement: This builds the element in Python/JS memory before it hits the page.
// 2. classList.add: We use this to apply the CSS styles already written in the <style> tag.
// 3. Nested Loop: The outer loop creates the planet; the inner loop creates as many moons as that planet has.
// 4. appendChild: This is like the "glue" that attaches the new elements to the HTML structure.