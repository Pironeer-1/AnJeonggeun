var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url,true).query; // _url을 객체로 바꾸어준다.
    console.log(queryData.id);
    var title = queryData.id;
    if(_url == '/'){
        title='Welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    // 읽은 파일은 decription에 저장됨
    fs.readFile(`data/${queryData.id}`, 'utf8', function(err,description){
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
        response.end(template);
    });
    
 
});
app.listen(3000);