let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

//We want to print each fruit using the forEach method.
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit);
    });
};

displayGroceries();
//Displaying the fruit using the forEach method, ends here.
//groceries.fruits is the array ["pear", "apple", "banana"].
//.forEach() is a loop that goes through each element of the array one by 
// one.
//Inside the loop, we log the current fruit with console.log(fruit).

