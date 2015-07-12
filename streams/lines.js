var split = require('split'),
    through2 = require('through2'),
    lineNumber = 0;

var tr = through2(function (line, _, next) {
        var buff = line.toString();
        this.push(lineNumber % 2 === 0?
            buff.toLowerCase() + '\n':
            buff.toUpperCase() + '\n'
        );
        lineNumber++;
        next();
    });

process.stdin
    .pipe(split())
    .pipe(tr)
    .pipe(process.stdout);