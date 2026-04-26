const button = document.getElementById("generateBtn");
const card = document.getElementById("characterCard");

// fetch random star wars character
async function getCharacter() {

try {

// random id between 1 and 83
const randomId = Math.floor(Math.random() * 83) + 1;

// show loading text
card.innerHTML = "<p>Loading...</p>";

// fetch character data
const response = await fetch(`https://www.swapi.tech/api/people/${randomId}/`);

if (!response.ok) {
throw new Error("Failed to fetch character");
}

const data = await response.json();

const character = data.result.properties;

// fetch homeworld
const homeworldResponse = await fetch(character.homeworld);
const homeworldData = await homeworldResponse.json();

const homeworld = homeworldData.result.properties.name;

// display character info
card.innerHTML = `
<h2>${character.name}</h2>
<p><strong>Height:</strong> ${character.height}</p>
<p><strong>Gender:</strong> ${character.gender}</p>
<p><strong>Birth Year:</strong> ${character.birth_year}</p>
<p><strong>Homeworld:</strong> ${homeworld}</p>
`;

} catch (error) {

card.innerHTML = "<p>Error loading character.</p>";
console.log(error);

}

}

// button click event
button.addEventListener("click", getCharacter);