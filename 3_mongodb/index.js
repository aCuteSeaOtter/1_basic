
const mongoose = require('mongoose');

const connect = ()=>{
    mongoose.connect(
        'mongodb://root:admin1234@127.0.0.1:27017/admin',
        {dbName : 'test'},
        (error)=>{
            if(error){
                console.log('MongoDB 연결 실패 :', error);
            }else{
                console.log('MongoDB 연결 성공 : 127.0.0.1:27017/test');
            };
        });
};

module.exports = {connect};