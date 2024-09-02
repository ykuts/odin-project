var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname + ".html";
    switch (q.pathname) {
        case "/":
            filename = "index.html";
            break;
        case "/about":
            filename = "about.html";
            break;
        case "/contact-me":
            filename = "contact-me.html";
            break;
        default:
            filename = "404.html";
    }
    fs.readFile(filename, function(err, data) {
        if(err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
                return res.end("Server error");
            
        } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        return res.end(data);
        
    }
    });
    
}).listen(8080);