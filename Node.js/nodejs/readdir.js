var testFolder = '../data';
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist) {  // readdir : 해당 디렉토리에 있는 파일 목록을 배열로 반환
    console.log(filelist);
});