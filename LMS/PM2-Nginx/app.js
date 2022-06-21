const fs = require("fs");

const express = require("express");

const app=express();
const port =  3000;

app.get('/',function(req,res){
    res.send('<h1>Wlecome to Express Server</h1>');
})

app.get('/getMovies',function(req,res){
    fs.readFile('./data/db.json',(err,result) => {
        if(err){
            throw err;
        }else {
            res.send(JSON.parse(result));
        }
    })
})

app.listen(port,function(err){
    if(err) throw err;
    console.log('Server is running at port'+port);
})




//   fs.appendFile('./data/mydata.txt','My New Text File ', function(err){
//     if(err){
//         throw err;
//     }else {
//         console.log('Data Written Successfully')
//     }
//   })