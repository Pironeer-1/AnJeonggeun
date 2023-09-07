var fs = require('fs');

/*
//readFileSync
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
console.log('C');
// 동기로 처리한 결과 A -> B -> C
*/

//readFile
console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function(err, result) {
    console.log(result);
});
console.log('C');
// 비동기로 처리한 결과 A -> C -> B
// 비동기에만 있는 세번째 인자 callback에 함수를 넣으면 작업이 완료된 후 해당 함수가 호출된다.