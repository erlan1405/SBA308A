// URL and key for API
const apiKey = '2ee0f9211b88963d0a0f5753';
const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;


//function for get exchange rates
async function fetchExchange() {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data.conversion_rates;
}
