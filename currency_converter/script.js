// URL and key for API
const apiKey = '2ee0f9211b88963d0a0f5753';
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;


//function for get exchange rates
async function fetchExchange() {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data.conversion_rates;
}


//function form processing and convertation
document.getElementById('converter-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    const rates = await fetchExchange();

    //Check exhange rates on the list
    if (rates[fromCurrency] && rates[toCurrency]) {
        const convertedAmount = amount * (rates[toCurrency] / rates[fromCurrency]);

        document.getElementById('converted-amount').innerHTML = `${convertedAmount.toFixed(2)} ${toCurrency}`;
    } else {
        document.getElementById('converted-amount').innerHTML = `Error: rates is not available`;
    }

});
