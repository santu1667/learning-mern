//Load the http Module
const http= require("http");

const hostname="127.0.0.1";
const port=8080;

//Create Server

const server = http.createServer(function(req,res){

    //set the response with status and content type
    res.writeHead(200,{"Content-type" : "text/plain"});

    //send the response
    res.end("Hello World !\n");
});

server.listen(port,hostname,function(){
    console.log(`server running at http://${hostname}:${port}/`);
    console.log('Hostname: '+hostname+' and port'+port);
});