// Loop through the people array and log each person
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// Loop through the array and exit after "Devon"
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Devon") {
    break; // stops the loop
  }
}
