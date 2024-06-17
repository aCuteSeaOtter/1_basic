// Ex05_async_await.js

async function init(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(users);
}

init();

// Ex04_fetch.js와 결과가 같음