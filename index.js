var http = require('http');
var fs = require('fs'); 

var server = http.createServer();

server.on('request', function (request, response) {
    if (request.method === 'GET' && request.url === '/') {
        response.setHeader("Content-Type", "text/html; charset=utf-8");
        fs.readFile('./index.html', function (err, html) {
            if(err) throw err;
            response.write(html);
            response.end();
        });
    }
    else {
            response.statusCode = 404;
            response.setHeader("Content-Type", "image/jpeg");
            fs.readFile('./404.jpg', function (err, img) {
                if(err) throw err;
                response.write(img);
                response.end();
            });
                
    }
});

server.listen(8080);

