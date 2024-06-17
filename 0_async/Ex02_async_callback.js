// Ex02_async_callback.js

function order(coffee, callback){
    console.log(`${coffee} 주문`);
    // console.log(coffee + "주문"); // 옛날 스타일

    setTimeout(() => {
        callback(coffee);
    }, 2000);
}

function pickup(result){
    console.log(`${result} 준비 완료`);
}

order('카페라떼', pickup);

console.log('다른 작업 진행');