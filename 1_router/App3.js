// App3.js

const express = require('express');
const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log('서버실행');
});

const customerRoute = require('./router/customer')  // .js 생략
const productRoute = require('./router/product')

app.use('/customer', customerRoute);    // url에 /customer가 들어오면 customerRoute로 연결
app.use('/product', productRoute);