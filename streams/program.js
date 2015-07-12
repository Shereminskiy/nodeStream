
//// meet pipe
//var fs = require('fs');
//fs.createReadStream(process.argv[2]).pipe(process.stdout);


//// input output
//process.stdin.pipe(process.stdout)

// transform

//Convert data from `process.stdin` to upper-case data on `process.stdout`
//using the `through2` module.

var through = require('through2');
var stream = through(write, end);

function write (buffer, encoding, next) {
    //this.push('I got some data: ' + buffer + '\n');
    this.push(buffer.toString().toUpperCase())
    next();
}

function end (done) {
    done();
}
process.stdin.pipe(stream).pipe(process.stdout);


//process.stdin.pipe(through(function(chunk, enc, callback){
//    //var str = chunk.toString().toUpperCase();
//    var blah = chunk.toString().split(' ');
//    blah.forEach(function(element) {
//        this.push("-------");
//        this.push(element)
//    }, this);
//
//    callback()
//})).pipe(process.stdout);

