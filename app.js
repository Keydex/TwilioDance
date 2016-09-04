var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var io = require('socket.io')(app);

// Twilio Credentials
var credentials = require('./auth.js')
var accountSid = credentials.sid;
var authToken = credentials.token;

//test
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/', function (req, res) {
  console.log(req.body.Body);
  res.json({text: req.body.Body});
  pushFrame(req.body.Body);
});

function pushFrame(framecount){
  if (framecount == '1')
    socket.emit('text', 1);
  else if (framecount == '2')
    socket.emit('text', 2);
  else if (framecount == '3')
    socket.emit('text', 3);
  else
    socket.emit('text', 4);
}


app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
