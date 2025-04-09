const apiKey = 'a2621fb5f07c74a278849383';
const fromCurrencySelect = document.getElementById('fromCurrency');
const toCurrencySelect = document.getElementById('toCurrency');
const amountInput = document.getElementById('amount');
const convertedAmount = document.getElementById('convertedAmount');

// Fetch supported currencies
fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`)
    .then(response => response.json())
    .then(data => {
        const currencies = data.supported_codes;
        currencies.forEach(([code, name]) => {
            const optionFrom = document.createElement('option');
            optionFrom.value = code;
            optionFrom.textContent = `${name} (${code})`;
            fromCurrencySelect.appendChild(optionFrom);

            const optionTo = document.createElement('option');
            optionTo.value = code;
            optionTo.textContent = `${name} (${code})`;
            toCurrencySelect.appendChild(optionTo);
        });
    })
    .catch(error => alert('Error fetching currency codes'));

// Fetch conversion rate and display converted amount
function convertCurrency() {
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    const amount = amountInput.value;

    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            const rate = data.conversion_rates[toCurrency];
            const converted = (rate * amount).toFixed(2);
            convertedAmount.textContent = converted;
        })
        .catch(error => alert('Error fetching conversion rates'));
}

// Switch currencies
function switchCurrencies() {
    const fromCurrency = fromCurrencySelect.value;
    fromCurrencySelect.value = toCurrencySelect.value;
    toCurrencySelect.value = fromCurrency;
    convertCurrency();
}
