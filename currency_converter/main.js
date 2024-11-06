import { fetchExchange } from './api.js';


export async function main() {
    try {
        document.getElementById('converter-form').addEventListener('submit', async (event) => {
            event.preventDefault();
        
            const amount = parseFloat(document.getElementById('amount').value);
            const fromCurrency = document.getElementById('from-currency').value;
            const toCurrency = document.getElementById('to-currency').value;
        
            try {
                const rates = await fetchExchange();
        
                if (rates[fromCurrency] && rates[toCurrency]) {
                    const convertedAmount = amount * (rates[toCurrency] / rates[fromCurrency]);
                    document.getElementById('converted-amount').innerHTML = `${convertedAmount.toFixed(2)} ${toCurrency}`;
                } else {
                    document.getElementById('converted-amount').innerHTML = 'Error: Exchange rates not available for the selected currencies';
                }
            } catch (error) {
                document.getElementById('converted-amount').innerHTML = 'Error fetching exchange rates';
            }
        });
    } catch (error) {
        console.error('Error in main function:', error);
    }
}

main();
