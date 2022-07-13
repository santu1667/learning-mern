const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const user = require("./route/UserController");
const bodyParser = require("body-parser");
const initiateMongoServer = require("./config/db");
initiateMongoServer();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(__dirname+'/public'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/',(req,res) => {
    res.render('order',{});
});

app.use('/api',user);

app.get("/AdminPage",(req,res)=>{
    res.render('AdminPage',{});
})

app.listen(port, () => {
    console.log('Express server listening on port ' + port);
  });