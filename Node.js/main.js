var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var template = require('./lib/template.js');

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
                var list = template.list(filelist);
                var html = template.HTML(title, list,
                    `<h2>${title}</h2><p>${description}</p>`,
                    `<a href="/create">create</a>`
                    );
                response.writeHead(200);    // 응답 헤더에 대한 정보 기록 200:정상
                response.end(html);
            });
        }
        else{
            fs.readdir('./data', function(error, filelist) {  // readdir : 해당 디렉토리에 있는 파일 목록을 배열로 반환
                var list = template.list(filelist);
                // 읽은 파일은 decription에 저장됨
                fs.readFile(`data/${queryData.id}`, 'utf8', function(err,description){
                    var title = queryData.id;
                    var html = template.HTML(title, list,
                        `<h2>${title}</h2><p>${description}</p>`,
                        `<a href="/create">create</a>
                        <a href="/update?id=${title}">update</a>
                        <form action="delete_process" method="post" onsubmit="return confirm('정말로 삭제하시겠습니까?');">
                            <input type="hidden" name="id" value="${title}">
                            <input type="submit" value="delete">
                        </form>`
                        );
                    response.writeHead(200);    // 응답 헤더에 대한 정보 기록 200:정상
                    response.end(html);
                });
            });
        }
    }else if(pathname === '/create'){
        fs.readdir('./data', function(error, filelist) {  // readdir : 해당 디렉토리에 있는 파일 목록을 배열로 반환
            var title = 'WEB - create';
            var list = template.list(filelist);
            var html = template.HTML(title, list, `
                <form action="/create_process" method="post">
                    <p><input type="text" name="title" placeholder="title"></p>
                    <p>
                        <textarea name="description" placeholder="description"></textarea>
                    </p>
                    <p>
                        <input type="submit">
                    </p>
                </form>
            `);
            response.writeHead(200);
            response.end(html);
        });
    }else if(pathname === '/create_process'){
        var body = '';

        request.on('data', function (data) {
            body = body + data;
        });

        request.on('end', function () {
            var post = qs.parse(body);
            // console.log(post);

            var title = post.title;
            var description = post.description;
            // console.log(title);
            // console.log(description);
            fs.writeFile(`data/${title}`, description, 'utf8', function(err){
                response.writeHead(302, {Location: `/?id=${title}`});
                response.end();
            });
        });
    }else if(pathname === '/update'){
        fs.readdir('./data', function(error, filelist) {  // readdir : 해당 디렉토리에 있는 파일 목록을 배열로 반환
            var list = template.list(filelist);
            // 읽은 파일은 decription에 저장됨
            fs.readFile(`data/${queryData.id}`, 'utf8', function(err,description){
                var title = queryData.id;
                var html = template.HTML(title, list,
                    `
                    <form action="/update_process" method="post">
                        <input type="hidden" name="id" value="${title}">
                        <p><input type="text" name="title" placeholder="title" value="${title}"></p>
                        <p>
                            <textarea name="description" placeholder="description">${description}</textarea>
                        </p>
                        <p>
                            <input type="submit">
                        </p>
                    </form>
                    `,
                    `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`
                    );
                response.writeHead(200);
                response.end(html);
            });
        });
    }else if(pathname === '/update_process'){
        var body = '';

        request.on('data', function (data) {
            body = body + data;
        });

        request.on('end', function () {
            var post = qs.parse(body);
            var id = post.id;
            var title = post.title;
            var description = post.description;
            // console.log(post);
            fs.rename(`data/${id}`, `data/${title}`, function(error){
                fs.writeFile(`data/${title}`, description, 'utf8', function(err){
                    response.writeHead(302, {Location: `/?id=${title}`});
                    response.end();
                });
            });
        });
    }else if(pathname === '/delete_process'){
        var body = '';

        request.on('data', function (data) {
            body = body + data;
        });

        request.on('end', function () {
            var post = qs.parse(body);
            var id = post.id;
            fs.unlink(`data/${id}`, function(error){
                response.writeHead(302, {Location: `/`});
                response.end();
            });
        });
    }else{
        response.writeHead(404);
        response.end('Not found');
    }
    
});
app.listen(3000);