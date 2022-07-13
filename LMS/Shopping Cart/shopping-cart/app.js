const express = require("express");
const bodyParser = require("body-parser");
const initiateMongoServer = require("./config/db");
const user =require("./routes/UserController");
const product =require("./routes/ProductController");

initiateMongoServer();

const port = 3002;
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api',user);

app.use('/api',product);

app.use(express.static(__dirname+'/public'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', function(req,res){
    res.render('welcome',{});
});

app.listen(port,function(req,res){
    console.log(`App is Started and listening at port ${port}`)
    });