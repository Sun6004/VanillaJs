var http = require('http');
var server = http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end("success");
});
server.listen(8080, function(){
    console.log('server running success');
})