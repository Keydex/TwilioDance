var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//test
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/', function (req, res) {
  console.log(req.body.From);
  console.log("test");
  res.json({text: req.body.From});
});


// Twilio Credentials
var credentials = require('./auth.js')
var accountSid = credentials.sid;
var authToken = credentials.token;



app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
