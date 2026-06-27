// Daily Challenge - Type Guards with Union Types
// 2. Function to handle mixed data
function handleData(data) {
    var results = [];
    // loop through array
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var item = data_1[_i];
        // type guard using "type" property
        if (item.type === "user") {
            results.push("User: Hello ".concat(item.name, ", you are ").concat(item.age, " years old."));
        }
        else if (item.type === "product") {
            results.push("Product: ID ".concat(item.id, ", price is $").concat(item.price, "."));
        }
        else if (item.type === "order") {
            results.push("Order: ID ".concat(item.orderId, ", total amount is $").concat(item.amount, "."));
        }
        else {
            // fallback (unexpected case)
            results.push("Unknown data type");
        }
    }
    return results;
}
// 3. TEST DATA
var mixedData = [
    { type: "user", name: "Alice", age: 25 },
    { type: "product", id: 101, price: 50 },
    { type: "order", orderId: "ORD123", amount: 200 },
    // unexpected case (to test safety)
    { type: "unknown" }
];
// run function
var output = handleData(mixedData);
// print results
for (var _i = 0, output_1 = output; _i < output_1.length; _i++) {
    var message = output_1[_i];
    console.log("Result:", message);
}
