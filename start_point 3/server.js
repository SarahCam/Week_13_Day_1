var express = require('express');
var app = express();

// This helps us parse the contents of "post" requests:
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Use the index controller:
// This will use the code in index.js to interpret the restful routes:
// app.use(require('./controllers/index'));
// Can just use /controllers and it will look for index automatically?
app.use(require('./controllers'));

// This will parse the static index.html file:
app.use(express.static('client/build'));

app.listen(3000, function () {
  console.log('App running on port '+this.address().port);
});
