//revealing module pattern

var greeting = 'Hello world!!!!';

function greet (){
    console.log (greeting);
}

module.export = {
    greet:greet
}

// exposing only the property and method you want via return object (exports)