// 2_db / mysql / sql.js

module.exports = {
    // [1] 검색
    employeeList : `select * from emp`,

    // [2] 입력
    // 실제입력 => INSERT INTO emp SET empno=9912, ename='홍씨', job='아이티'
    employeeInsert : `insert into emp set ?`,

    // [3] 수정
    // 실제입력 => UPDATE emp SET ename='김씨', job ='개발 HWERE empno=9912
    employeeUpdate : `update emp set ? where empno=?`,

    // [3] 삭제
    // 실제입력 => DELETE FROM emp HWERE empno=9912
    employeeDelete : `delete from emp where empno=?`
}
