var express = require('express');
var app = express();
var path = require(path);
var port = process.env.port ||5000;

app.use(express.static('./public'));

require('./src/routes/routes')(app);

app.listen(port, function () {
    console.log('Example app listening on port 4000!');
});
