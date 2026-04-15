// Exercise: Not Bad

// 1. Create the sentence variable
const sentence = "The movie is not that bad, I like it";

// 2. Find the position of the word "not"
// indexOf returns the index number where the word starts
const wordNot = sentence.indexOf("not");

// 3. Find the position of the word "bad"
const wordBad = sentence.indexOf("bad");

// 4. Check the logic and replace
// We check if "not" and "bad" both exist (not -1) AND if "bad" comes after "not"
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
    
    // We slice the part from the start of "not" to the end of "bad"
    // slice(start, end) where end is wordBad + 3 (the length of "bad")
    const toReplace = sentence.slice(wordNot, wordBad + 3);
    
    // Replace that chunk with "good"
    const result = sentence.replace(toReplace, "good");
    console.log(result);
    
} else {
    // If the condition isn't met, just print the original
    console.log(sentence);
}

// Explanation for myself so I don't get confused and can remember the logic later:
// 1. indexOf: This searches the string for a word. If it finds it, it gives the number (index). If not, it gives -1.
// 2. The Logic: 'wordBad > wordNot' ensures that "bad" actually follows "not" in the sentence.
// 3. slice: We use this to grab the exact phrase "not...bad" so we know exactly what to swap.
// 4. replace: A simple method that finds one piece of text and swaps it for another.