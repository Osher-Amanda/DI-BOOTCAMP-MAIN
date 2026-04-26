// Daily Challenge - Type Guards with Union Types


// 1. Define types

type User = {
type: "user";
name: string;
age: number;
};

type Product = {
type: "product";
id: number;
price: number;
};

type Order = {
type: "order";
orderId: string;
amount: number;
};


// 2. Function to handle mixed data

function handleData(data: (User | Product | Order)[]): string[] {

const results: string[] = [];

// loop through array
for (let item of data) {

// type guard using "type" property

if (item.type === "user") {

results.push(`User: Hello ${item.name}, you are ${item.age} years old.`);

} else if (item.type === "product") {

results.push(`Product: ID ${item.id}, price is $${item.price}.`);

} else if (item.type === "order") {

results.push(`Order: ID ${item.orderId}, total amount is $${item.amount}.`);

} else {

// fallback (unexpected case)
results.push("Unknown data type");

}

}

return results;

}


// 3. TEST DATA

const mixedData = [

{ type: "user", name: "Alice", age: 25 },
{ type: "product", id: 101, price: 50 },
{ type: "order", orderId: "ORD123", amount: 200 },

// unexpected case (to test safety)
{ type: "unknown" } as any

];


// run function
const output = handleData(mixedData);


// print results
for (let message of output) {
console.log("Result:", message);
}