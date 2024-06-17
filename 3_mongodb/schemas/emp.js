// schemas / emp.js

const mongoose = require('mongoose');

const {Schema} = mongoose;

const empSchema = new Schema({
    empno : {               // _id라는 개념으로 
        type : Number,
        required : true,
        unique : true
    },
    ename : {
        type : String,
        required : true
    },
    job : {type : String},
    sal : {type : Number}
});

/*
    스키마 타입
        Number / String / Date / Boolean
        ObjectId : 객체아이디
        Buffer : 파일을 담을 수 있는 버퍼
        Array : 여러개
*/

const Emp = mongoose.model('EMP', empSchema);

module.exports = Emp;
// module.exports = {Emp}와 차이는???