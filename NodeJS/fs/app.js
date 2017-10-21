var fs = require ('fs');

var greet = fs.readFileSync (__dirname + './greet.txt', 'utf8') 
// __dirname is one of param when it's passed on the IIFE
// so the first param is the full path, 2nd is encode utf8 is default
//Sync s as it meands, V8 will wait to go next line untill the buffer full up
// most of the case you would like to do without Sync
condole.log (greet);

var greet2 = fs.readFile (__dirname + './greet.txt', 'utf8', function (err, data){
    //this is event loop called error first call back
    // if you omit encode - 2nd param, you get buffer with binary data back
    console.log(data)
});

console.log ('Done!')

// done will be print first befor data because it asynchronously runs
