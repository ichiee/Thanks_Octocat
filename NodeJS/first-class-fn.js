// Your Javascript Code Goes Here
function greet (){
    console.log ('hi');
}

greet();

// functions ar efirst class

function logGreeting (fn){
    fn();
}
logGreeting(greet);

// function expression
var greetMe = function(){
    console.log ('Hi Ichi');
}
greetMe();

// it is first class

logGreeting (greetMe);

// user function expression on the fly
logGreeting(function(){
    condole.log('hello Ichi!')
});