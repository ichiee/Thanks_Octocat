// 5 Node common module patterns 

var greet1 = require('./greet1');
greet1();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'changed hello world';

var greet3b = require('./greet3');
greet3b.greet(); // this will be 'changed hello worls'

/*
step in module.js
there is var cachedModule, require caches and stores the require function of any paticular file name
so whatever hang on to module.expers, it will be going on chache Module. it return instead (cachedModule.exports)
because it's object, (exports is object) it will end up being a refernce to the same object

this will be highly useful
*/

var Greet4 = require('./greet4'); // with out new so it is just a constructor
var grtr = new Greet4(); // create new class (like)
grtr.greet();

var greet5 = require ('./greet5').greet;
greet5();
