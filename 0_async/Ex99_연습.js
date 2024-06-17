// Ex99_연습.js

async function init(){
    const response = await fetch('https://dummyjson.com/quotes');
    const users = await response.json();
    const quotes = users.quotes;

    const ransu = parseInt(Math.random() * 30)

    console.log(quotes[ransu].quote);
}

init();