var http=require("http");
var port =process.env.PORT ||1337;
var server = http.createServer(function(req,res) {
res.writeHead(200,{"Content-type":"text/plain"});
res.end("hellow world")
});

server.listen(port);

console.log("server started on "+port);
