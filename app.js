var express = require('express');
var app = express();
var engines = require('consolidate');

app.engine('html', engines.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

app.get('/', function(req, res){
  res.render('index');
});

app.listen(3000, function(){
  console.log("listening on port 3000")
});
