const express = require("express");

const app= express();
const port = 8080;

//Define endpoint
app.get("/", function(req,res){

    res.send("Hello World this is express JS App");

});

app.get("/add", function(req,res){
    const a=1;
    const b=2;
    res.send(`Hello World this is an Addition Calc: ${a+b}`);

});

app.get("/sub", function(req,res){
    const a=5;
    const b=2;
    res.send(`Hello World this is an Addition Calc: ${a-b}`);

});

app.get("/mul", function(req,res){
    const a=1;
    const b=2;
    res.send(`Hello World this is an Addition Calc: ${a*b}`);

});

app.get("/div", function(req,res){
    const a=10;
    const b=2;
    res.send(`Hello World this is an Addition Calc: ${a-b}`);

});

//starting the server
app.listen(port,function(){
    console.log(`Hello world app is listening on port ${port}`);
});