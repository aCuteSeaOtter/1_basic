// Ex04_fetch.js

fetch('https://jsonplaceholder.typicode.com/users')
    // .then(()=> console.log('ok'))   //저 사이트에 접속해서 결과가 있으면 처리
    .then((Response) => Response.json());    //(response)의 괄호는 없어도 되지만 명확하게 하기위해
    .then(users => console.log(users));

console.log('다른 작업');    // 위의 코드실행시 느리던 말던 다른 작업 실행 => 비동기 작업