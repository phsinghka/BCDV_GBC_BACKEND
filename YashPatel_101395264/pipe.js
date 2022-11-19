var zlib = require('zlib');
var fs = require('fs');

var createZip = zlib.createGzip();
var r = fs.createReadStream('./output.txt');
var w = fs.createWriteStream('./output.txt.gz');
r.pipe(createZip).pipe(w);
