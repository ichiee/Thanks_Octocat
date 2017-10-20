
var Emitter = require('./emitter');

var emtr = new Emitter ();

emtr.on('greet', function (){
    console.log ('Somewhere someone said oh hi');
});
emtr.on('greet', function(){
    console.log('Greeting occured!');

});

console.log ('Hello!');
emtr.emit('greet');

