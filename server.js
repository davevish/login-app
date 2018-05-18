var express = require('express');
var port = process.env.port ||5000;

var app = express();
app.use(express.static('client/build'));

app.get('/v1/hello', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send('Hello World!\n');
});

app.listen(4000, function () {
    console.log('Example app listening on port 4000!');
});
