var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// This will parse the static index.html file:
app.use(express.static('client/build'));

// This will use the code in index.js to interpret the restful routes:
app.use(require('./controllers/index'));

app.listen(3000, function () {
  console.log('App running on port '+this.address().port);
});
