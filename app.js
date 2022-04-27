var http = require('http');

var server = http.createServer(function(req, res){
    res.write('Merhaba');

    res.end('Mesaj Bitti');
});


server.listen(8000);