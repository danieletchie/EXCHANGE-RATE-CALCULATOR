const currencyEl_one = document.getElementById("currency-one");
const currencyEl_two = document.getElementById("currency-two");
let amountEl_one = document.getElementById("amount-one");
let amountEl_two = document.getElementById("amount-two");


const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

// FETCH exchange rates and update the dom
function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
        const rate = data.rates[currency_two];

        rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
        amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    })
    .catch(err => {
        console.log(err)
    });
}
calculate();



// EVENT LISTENERES
currencyEl_one.addEventListener("change", calculate)
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener("click", swapExchange)