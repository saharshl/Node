let http = require('http');
http.createServer(function(req,resp){
	resp.write("Hello this is Node");
	resp.end();
}).listen(3001);
 
