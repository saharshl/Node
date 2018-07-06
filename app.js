var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', function(req,res){
	res.sendFile(__dirname + '/Blog.html');
});
app.listen(3001);
