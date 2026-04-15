const marioGame = {
detail: "An amazing game!",
characters: {
mario: {
description: "Small and jumpy. Likes princesses.",
height: 10,
weight: 3,
speed: 12
},
bowser: {
description: "Big and green, Hates princesses.",
height: 16,
weight: 6,
speed: 4
},
princessPeach: {
description: "Beautiful princess.",
height: 12,
weight: 2,
speed: 2
}
}
};

const jsonMario = JSON.stringify(marioGame);

console.log(jsonMario);

/*
Nested objects remain nested in JSON format.
They become nested JSON objects inside the JSON string.
*/

const prettyMario = JSON.stringify(marioGame, null, 2);

console.log(prettyMario);

/*
1st parameter = object to convert
2nd parameter = replacer (null because not needed)
3rd parameter = spacing/indentation for pretty printing
*/

debugger;

console.log("Breakpoint reached - inspect jsonMario and prettyMario in debugger");