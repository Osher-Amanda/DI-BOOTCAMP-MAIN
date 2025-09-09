const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
};

// Create sentence from object
let sentence = "";
for (let key in details) {
  sentence += key + " " + details[key] + " ";
}
console.log(sentence.trim()); // "my name is Rudolf the reindeer"