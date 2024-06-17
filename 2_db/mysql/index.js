// 2_db / mysql / index.js

const mysql = require('mysql');
const sql = require('./sql.js');

// ConnectionPool 생성
const pool = mysql.createPool({
    host : '127.0.0.1',
    port : 3306,
    user : 'scott',
    password : 'tiger',
    database : 'basic',
    connectionLimit : 10
});

// 쿼리를 실행하고 결과를 반영하는 함수
const query = (alias, value)=>{
    return new Promise((resolve, reject)=>{
        pool.query(sql[alias], value, (error, results)=>{
            if(error){
                console.log('error');
                reject(error);
            }else{
                resolve(results);
            }
        })
    });
};

module.exports = {query}