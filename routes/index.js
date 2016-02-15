var express = require('express');

app.get('/', function(req, res){
	res.render('index');
});

app.listen(3000, function(){
	console.log("listening on port 3000");
});

