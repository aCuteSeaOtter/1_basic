// App2.js

const express = require('express');
const app = express();
const port = 3000;

app.listen(port, ()=>{    // ()=>{} : 함수
    console.log('서버실행');
});

// 요청(request)가 들어오면 지정된 함수를 호출(콜백함수)
// app.get('/', (req, res)=>{
//     res.send('노드 헬로우 성공');
// });

app.route('/').get(function(req, res){  // 위와 같은 함수
    res.send('노드 헬로우 성공22');
})

app.route('/member')
    .get(function(req, res){
        res.send('고객정보조회');
    })
    .post(function(req, res){
        res.send('고객정보입력');
    })
    .put(function(req, res){
        res.send('고객정보수정');
    })
    .delete(function(req, res){
        res.send('고객정보삭제');
    });