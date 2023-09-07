// callback : 어떤 실행문을 마치면 내부적으로 자동 호출하는 기능

var a = function () {
    console.log('A');
}

function slowfunc(callback) {
    callback();
} // 콜백을 매개변수로 받아서 호출

slowfunc(a);