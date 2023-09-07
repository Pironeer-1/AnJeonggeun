var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url,true).query; // _url을 객체로 바꾸어준다. .query : url 정보 중에서 query 정보만 가져옴
    var pathname = url.parse(_url, true).pathname;

    console.log(url.parse(_url,true));

    if(pathname === '/'){
        if(queryData.id === undefined){
            var title = 'Welcome';
            var description = 'Hello, Node.js';
            var template = `
            <!doctype html>
            <html>
                <head>
                    <title>WEB1 - ${title}</title>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1><a href="/">WEB</a></h1>
                    <ul>
                        <li><a href="/?id=HTML">HTML</a></li>
                        <li><a href="/?id=CSS">CSS</a></li>
                        <li><a href="/?id=JavaScript">JavaScript</a></li>
                    </ul>
                    <h2>${title}</h2>
                    <p>${description}</p>
                </body>
            </html>
            `;
            response.writeHead(200);    // 응답 헤더에 대한 정보 기록 200:정상
            response.end(template);
        }
        else{
            // 읽은 파일은 decription에 저장됨
            fs.readFile(`data/${queryData.id}`, 'utf8', function(err,description){
                var title = queryData.id;
                var template = `
                <!doctype html>
                <html>
                    <head>
                        <title>WEB1 - ${title}</title>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1><a href="/">WEB</a></h1>
                        <ul>
                            <li><a href="/?id=HTML">HTML</a></li>
                            <li><a href="/?id=CSS">CSS</a></li>
                            <li><a href="/?id=JavaScript">JavaScript</a></li>
                        </ul>
                        <h2>${title}</h2>
                        <p>${description}</p>
                    </body>
                </html>
                `;
                response.writeHead(200);    // 응답 헤더에 대한 정보 기록 200:정상
                response.end(template);
            });
        }
    }else{
        response.writeHead(404);
        response.end('Not found');
    }
    
});
app.listen(3000);