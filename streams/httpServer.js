var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    console.log("Sssssssssss");
    fs.createReadStream('data.txt').pipe(res);
    console.log("111111111");
});
server.listen(process.argv[2]);
