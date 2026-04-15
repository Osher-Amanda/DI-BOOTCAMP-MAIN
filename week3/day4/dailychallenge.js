let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
};

// Part 1
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit);
    });
};

displayGroceries();

// Part 2
const cloneGroceries = () => {
    let user = client;

    client = "Betty";

    console.log("client:", client); // Betty
    console.log("user:", user);     // John

    let shopping = groceries;

    groceries.totalPrice = "35$";

    console.log("groceries totalPrice:", groceries.totalPrice); // 35$
    console.log("shopping totalPrice:", shopping.totalPrice);   // 35$

    groceries.other.paid = false;

    console.log("groceries paid:", groceries.other.paid); // false
    console.log("shopping paid:", shopping.other.paid);   // false
};

cloneGroceries();