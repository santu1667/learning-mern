//import fileSystem
//const fs = require('fs');

//import express
const http = require('http');
const hostname = "127.0.0.1";
const express = require('express');

//create App
const app= express();
const port = 3000;

//default route
app.get('/', function(req,res){
    res.send(`<h1>Welcome to Express Server</h1>`)
})

//read File db.js
fs.readFile('db.json',function(err,result){
    if(err){console.log(`Error Occured while reading JSON file`)}
    else {console.log('Json file data'+JSON.parse(result))}
})

app.listen(port,function(err){
    if(err){console.log(`Error Occured while started the App`)}
    else{console.log(`App is Started and listening at port ${port}`)}
})
