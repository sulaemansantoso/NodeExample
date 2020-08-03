var app = require('express')();
var path = require('path');
var http = require('http').createServer(app);


app.get('/', (req, res) => {
  // res.send('<h1>Hello world</h1>');
  res.sendFile(path.join(__dirname+'/index.html'));
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});