var express = require('express');
 
var app = express();//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('changed not ');
});//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;




#or


 
var express = require('express');
 
var app = express();//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('changed not ');
});

app.get('/getreels', function (req, res) {
 res.send('{"id":1,"Name":"nikhil","caption":"is anyone here"} ');
});

app.get('/gethtml', function (req, res) {
 res.send(' <h1> html code </h1> ');
});

//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;
 
