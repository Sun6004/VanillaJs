var http = require('http');
var url = require('url');
var queryString = require('querystring');

var server = http.createServer(function(request,response){
    console.log(request.url);

    var parsedUrl = url.parse(request.url);
    var postData = ''; //post로 전달된 데이터를 담을 변수

    request.on('data', function(data){
        postData = postData + data; // data 이벤트가 발생할 때 callback을 통해 postData변수에 값을 저장
    })
    request.on('end', function(){
        var parsedQuery = queryString.parse(postData); //end이벤트가 발생하면 postData를 queryString으로 객체화
        console.log(parsedQuery);
    })
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end(result);
});

server.listen(8080, function(){
    console.log('server running success');
})