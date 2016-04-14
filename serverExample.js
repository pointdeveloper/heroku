var http=require("http");

var server = http.createServer(function(req,res) {
res.writeHead(200,{"Content-type":"text/plain"});
res.end("hellow world")
});

server.listen(3000);

console.log("server started on 3000");
