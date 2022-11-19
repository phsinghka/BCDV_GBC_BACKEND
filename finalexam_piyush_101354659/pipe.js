var zlib = require('zlib');
var fs = require('fs');

var zlibOutput = zlib.createGzip();
var read = fs.createReadStream('./output.txt');
var write = fs.createWriteStream('./output.txt.gz');
read.pipe(zlibOutput).pipe(write);
