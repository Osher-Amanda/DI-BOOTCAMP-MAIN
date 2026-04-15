// 1ST DAILY CHALLENGE - MAKE ALL CAPS + SORT WORDS

function makeAllCaps(arr) {
return new Promise((resolve, reject) => {

const allStrings = arr.every(item => typeof item === "string");

if (!allStrings) {
reject("Error: Not all items are strings");
} else {
resolve(arr.map(word => word.toUpperCase()));
}

});
}

function sortWords(arr) {
return new Promise((resolve, reject) => {

if (arr.length <= 4) {
reject("Error: Array must have more than 4 words");
} else {
resolve(arr.sort());
}

});
}

// TESTS - 1ST CHALLENGE

makeAllCaps([1, "pear", "banana"])
.then(arr => sortWords(arr))
.then(result => console.log("1st Challenge Result:", result))
.catch(err => console.log("1st Challenge Error:", err));

makeAllCaps(["apple", "pear", "banana"])
.then(arr => sortWords(arr))
.then(result => console.log("1st Challenge Result:", result))
.catch(err => console.log("1st Challenge Error:", err));

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
.then(arr => sortWords(arr))
.then(result => console.log("1st Challenge Result:", result))
.catch(err => console.log("1st Challenge Error:", err));


// 2ND DAILY CHALLENGE - MORSE CODE

const morse = `{
"0":"-----","1":".----","2":"..---","3":"...--","4":"....-",
"5":".....","6":"-....","7":"--...","8":"---..","9":"----.",
"a":".-","b":"-...","c":"-.-.","d":"-..","e":".","f":"..-.",
"g":"--.","h":"....","i":"..","j":".---","k":"-.-","l":".-..",
"m":"--","n":"-.","o":"---","p":".--.","q":"--.-","r":".-.",
"s":"...","t":"-","u":"..-","v":"...-","w":".--","x":"-..-",
"y":"-.--","z":"--..",
".":".-.-.-",",":"--..--","?":"..--..","!":"-.-.--",
"-":"-....-","/":"-..-.","@":".--.-.","(":"-.--.",")":"-.--.-"
}`;

function toJs() {
return new Promise((resolve, reject) => {

const morseJS = JSON.parse(morse);

if (Object.keys(morseJS).length === 0) {
reject("Error: Morse object is empty");
} else {
resolve(morseJS);
}

});
}

function toMorse(morseJS) {
return new Promise((resolve, reject) => {

const userInput = prompt("Enter a word or sentence:").toLowerCase();

const result = [];

for (let char of userInput) {

if (!morseJS[char]) {
reject(`Error: character "${char}" not found in morse table`);
return;
}

result.push(morseJS[char]);
}

resolve(result);

});
}

function joinWords(morseTranslation) {

const output = document.getElementById("output");

output.innerText = morseTranslation.join("\n");

}

// CHAIN - 2ND DAILY CHALLENGE

toJs()
.then(morseJS => toMorse(morseJS))
.then(result => joinWords(result))
.catch(err => console.log("Morse Error:", err));