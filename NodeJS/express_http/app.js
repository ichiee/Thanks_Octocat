
var express = require ('express');
var app = express();

var port = process.env.PORT || 3000;
// process is global variable which env's PORT 
//(var PORT you would sent on server)

app.get('/', function (req, res){
    res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
});

app.get('/api', function (req, res){
    res.json ({firstname: 'John', lastname :'Doe'});
});

// so it is like if statement
// get is a GET verb
//when you see'/' (homepage), the function fire

app.listen (port);

// enviroment variables : grobal variables specific to the enviroments (server) our code lives in
// need to do a lots when you deploy node
// HTTP Method - Get Post Delete etc also alled verb
