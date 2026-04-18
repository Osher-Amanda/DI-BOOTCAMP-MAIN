const apiKey = "9357a2452e58278f4d319716";

const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const amountInput = document.getElementById("amount");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");
const switchBtn = document.getElementById("switchBtn");


// Fetch all supported currencies
async function loadCurrencies() {

try {

const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`);

if (!response.ok) {
throw new Error("Failed to fetch currencies");
}

const data = await response.json();

const currencies = data.supported_codes;

currencies.forEach(currency => {

const code = currency[0];
const name = currency[1];

fromCurrency.innerHTML += `<option value="${code}">${code} - ${name}</option>`;
toCurrency.innerHTML += `<option value="${code}">${code} - ${name}</option>`;

});

} catch (error) {

console.log(error);

}

}


// Convert currency
async function convertCurrency() {

try {

const from = fromCurrency.value;
const to = toCurrency.value;
const amount = amountInput.value;

const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amount}`);

if (!response.ok) {
throw new Error("Failed to convert currency");
}

const data = await response.json();

result.textContent = `${amount} ${from} = ${data.conversion_result} ${to}`;

} catch (error) {

console.log(error);
result.textContent = "Conversion failed.";

}

}


// Bonus: Switch currencies
function switchCurrencies() {

const temp = fromCurrency.value;
fromCurrency.value = toCurrency.value;
toCurrency.value = temp;

convertCurrency();

}


// Event Listeners
convertBtn.addEventListener("click", convertCurrency);

switchBtn.addEventListener("click", switchCurrencies);


// Load currencies when page opens
loadCurrencies();