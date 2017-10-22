// pipe gzip

var fs = require ('fs');
var zlib = requile ('zlib');

var readable = fs.createReadStream(__dirname + './greeet.txt');

var writable = fs.creatWriteStream(__dirname + './greetcopy.txt');

var compressed = fs.createWriteStream (__dirnama + './compressed.txt');

var gzip = zlib.createGzip();

readable.pipe(witable);
readable.pipe(gzip).pipe(compressed);
// chaining
