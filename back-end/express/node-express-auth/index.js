const express = require("express");
const bodyParser = require("body-parser");
const initiateMongoServer = require("./config/db");
const user = require("./routes/user")

initiateMongoServer();

const app = express();
const port = 4000;
//const port = process.env.port || 4000;

app.use(bodyParser.json());

app.get('/', function(req,res){
    res.send(`<h1>Welcome to Express Auth Demo API</h1>`);
});

/**
 * Router Middleware
 * Router - /usersignup/
 * Method - *
*/
app.use('/user',user);

app.listen(port,function(req,res){
    console.log(`App is Started and listening at port ${port}`)
    });

