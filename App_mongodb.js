const express = require('express');

const app = express();

app.listen(3000, ()=>{
    console.log('서버 구동 중')
});

const mongodb = require('./3_mongodb');
mongodb.connect();

const Emp = require('./3_mongodb/schemas/emp');

// [0] 전체 검색
app.get('/emp', async(req, res)=>{
    const employees = await Emp.find(); // find라는 함수를 만들지 않았지만 몽고db에서 만들어졌기 때문에 사용가능
    console.log(employees);
    res.send(employees);
});

// [1] 입력
app.get('/empInsert', async(req, res)=>{
    const emp1 = await Emp.create({
        empno : 1112,
        ename : '박길동',
        job : '개발',
        sal : 5000
    }); // create라는 함수를 만들지 않았지만 몽고db에서 만들어졌기 때문에 사용가능
    console.log(emp1);
});

app.get('/empInsert2', async(req, res)=>{
    const emp1 = await Emp.create([
        {
            empno : 1113,
            ename : '최길동',
            job : 'IT',
            sal : 4000
        },
        {
            empno : 1114,
            ename : '김길동',
            job : '개발',
            sal : 6000
        }
    ]);
    console.log(emp1);
});

// [2] 검색
app.get('/empTest', async(req, res)=>{
    // 전체 검색
    // const employees = await Emp.find({});
    // console.log(employees);
    // res.send(employees);

    // 월급이 5000이상 검색
    // const employees = await Emp.find({sal : {$gte : 5000}});    // $gte : >= (sql이 없음)
    // console.log(employees);
    // res.send(employees);

    // 월급이 5000이상 이름이 김길동
    // const employees = await Emp.find({
    //     sal : {$gte : 5000},
    //     ename : '김길동'
    // });
    // console.log(employees);
    // res.send(employees);

    // 이름에 '길동'이 포함된 문서를 검색
    // const employees = await Emp.find({ename : /길동/});
    const employees = await Emp.find({ename : /길동/},'ename sal'); // 길동이 포함된 문서를 검색해서 이름과 연봉만 표시
    console.log(employees);
    res.send(employees)
});

// [3] 수정
app.get('/empUpdate1', async(req, res)=>{
    const emp1 = await Emp.updateOne({empno : 1113}, {job:'개발'});
    console.log(emp1);
});

app.get('/empUpdate2', async(req, res)=>{
    const emp1 = await Emp.updateMany({sal : {$gte : 5000}}, {job : '디자인'});
    console.log(emp1);
});

// [4] 삭제
app.get('/empDelete1', async(req, res)=>{
    const emp1 = await Emp.deleteOne({empno : 1113});
    console.log(emp1);
});

app.get('/empDelete2', async(req, res)=>{
    const emp1 = await Emp.deleteMany({sal : {$lt : 10000}});
    console.log(emp1);
});