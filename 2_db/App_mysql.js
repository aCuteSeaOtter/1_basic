// 2_db / App_mysql.js

const express = require('express');

const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log('서버 구동중');
});

const mysql = require('./mysql');   // index.js 실행(index라는 이름을 쓰면 자동으로 잡힘)

// [1] 데이터 검색
app.get('/api/employee', async(req, res)=>{
    const employees = await mysql.query("employeeList");
    console.log(employees)
    res.send(employees)
});

// [2] 데이터 입력
app.use(
    express.json({limit : '50mb'})
);

app.post('/api/employee/insert', async(req, res)=>{
    console.log('입력');
    console.log(req.body);

    const result = await mysql.query("employeeInsert", req.body.param);
    res.send(result);
});

// [3] 데이터 수정
app.put('/api/employee/update', async(req, res)=>{
    console.log('수정');
    console.log(req.body);

    const result = await mysql.query("employeeUpdate", req.body.param);
    res.send(result);
});

// [4] 데이터 삭제
app.delete('/api/employee/delete/:id', async(req, res)=>{   // RestFul 방식 사용
    console.log('삭제');
    const {id} = req.params;
    
    const result = await mysql.query("employeeDelete", id);
    res.send(result);
});