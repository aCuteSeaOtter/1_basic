// router / product.js

const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.send('상품정보 조회 /product 라우터');
});

router.post('/insert', function(req, res){
    res.send('상품정보 입력 /product/insert 라우터');
});

router.put('/update', function(req, res){
    res.send('상품정보 수정 /product/update 라우터');
});

router.delete('/delete', function(req, res){
    res.send('상품정보 삭제 /product/delete 라우터');
});

module.exports = router;    // 바깥모듈에서 사용할 수 있도록