// Step 1: Create a sentence that has the words "not" and "bad"
let sentence = "That guy is not that bad looking, he is ok";

// Step 2: Find the position of the first "not" in the sentence
// indexOf gives the position number where the word starts (counting from 0)
let wordNot = sentence.indexOf("not");

// Step 3: Find the position of the first "bad" in the sentence
let wordBad = sentence.indexOf("bad");

// Step 4: Check if "not" appears before "bad"
// -1 means "not found", so we also check that both exist
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
  
  // Step 5: Replace the part from "not" up to "bad" with the word "good"
  // substring(start, end) cuts out the part of the string we want to replace
  // wordBad + 3 is used because "bad" is 3 letters long
  let toReplace = sentence.substring(wordNot, wordBad + 3);
  
  // Step 6: Use .replace() to swap the "not...bad" part with "good"
  let result = sentence.replace(toReplace, "good");
  
  // Step 7: Print the new sentence
  console.log(result);
} else {
  // Step 8: If "not" doesn’t come before "bad", print the original sentence
  console.log(sentence);
}

