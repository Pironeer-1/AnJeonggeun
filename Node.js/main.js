var http = require('http');
var fs = require('fs');
var url = require('url');

function templateHTML(title, list, body){
    return `
    <!doctype html>
    <html>
        <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
        </head>
        <body>
            <h1><a href="/">WEB</a></h1>
            ${list}
            ${body}
        </body>
    </html>
    `;
}

function templateList(filelist){
    var list = '<ul>';
    var i = 0;
    while(i < filelist.length){
        list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
        i=i+1;
    }
    list = list + '</ul>';
    return list;
}

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url,true).query; // _url을 객체로 바꾸어준다. .query : url 정보 중에서 query 정보만 가져옴
    var pathname = url.parse(_url, true).pathname;

    console.log(url.parse(_url,true));

    if(pathname === '/'){
        if(queryData.id === undefined){
            fs.readdir('./data', function(error, filelist) {  // readdir : 해당 디렉토리에 있는 파일 목록을 배열로 반환
                var title = 'Welcome';
                var description = 'Hello, Node.js';
                var list = templateList(filelist);
                var template = templateHTML(title, list, `<h2>${title}</h2><p>${description}</p>`);
                response.writeHead(200);    // 응답 헤더에 대한 정보 기록 200:정상
                response.end(template);
            });
        }
        else{
            fs.readdir('./data', function(error, filelist) {  // readdir : 해당 디렉토리에 있는 파일 목록을 배열로 반환
                var list = templateList(filelist);
                // 읽은 파일은 decription에 저장됨
                fs.readFile(`data/${queryData.id}`, 'utf8', function(err,description){
                    var title = queryData.id;
                    var template = templateHTML(title, list, `<h2>${title}</h2><p>${description}</p>`);
                    response.writeHead(200);    // 응답 헤더에 대한 정보 기록 200:정상
                    response.end(template);
                });
            });
        }
    }else{
        response.writeHead(404);
        response.end('Not found');
    }
    
});
app.listen(3000);