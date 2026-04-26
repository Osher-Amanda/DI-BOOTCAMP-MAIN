const numbers = [10, 11, 12, 15, 20];
numbers.forEach(function(number) {
    if (number % 2 === 0) {
        console.log(number);}
    });

    }
})

const numbers = [10, 11, 12, 15, 20];

numbers.forEach((x) => {
  if (x % 2 === 0) console.log(x);
});

(function() {
    let message = "Hello, World!";
    console.log(message); // Outputs: Hello, World!
})();

console.log(message); // ReferenceError: message is not defined