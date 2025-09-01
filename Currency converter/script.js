const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const amountInput = document.getElementById("amount");
const resultDiv = document.getElementById("result");

// Fetch and populate currency list
async function loadCurrencyList() {
  const res = await fetch("https://api.frankfurter.app/currencies");
  const currencies = await res.json();

  for (const code in currencies) {
    const option1 = document.createElement("option");
    option1.value = code;
    option1.text = `${code} - ${currencies[code]}`;

    const option2 = option1.cloneNode(true);

    fromCurrency.appendChild(option1);
    toCurrency.appendChild(option2);
  }

  fromCurrency.value = "USD";
  toCurrency.value = "INR";
}

async function convertCurrency() {
  const amount = amountInput.value;
  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (from === to) {
    resultDiv.innerText = "Select different currencies.";
    return;
  }

  if (amount === "" || amount <= 0) {
    resultDiv.innerText = "Please enter a valid amount.";
    return;
  }

  try {
    const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`);
    const data = await res.json();
    const rate = data.rates[to];

    resultDiv.innerText = `${amount} ${from} = ${rate.toFixed(2)} ${to}`;
  } catch (err) {
    resultDiv.innerText = "Conversion failed. Try again.";
    console.error(err);
  }
}

// Load currencies on page load
loadCurrencyList();
