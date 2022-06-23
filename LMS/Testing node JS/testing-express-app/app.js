const express = require("express");

const user = require("./model/UserController");

const bodyParser = require("body-parser");

let morgan = require("morgan");

let config = require("config");

const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({urlExtended: true}));
app.use(bodyParser.text());;
app.use(bodyParser.json({type:'appliocation/json'}));



const initiateMongoServer = require("./db");
initiateMongoServer();

// mongoose.connect(mongoDB,options);
// let db =mongoose.connection;
// db.on("error",console.error.bind(console,"DB Connection Error"));

if(config.util.getEnv('NODE_ENV')!= 'test'){
    app.use(morgan('combined'));
}

app.get("/",function(req,res){
    res.send('Welcome to Express Test API');
})

app.route("/users").get(user.getUsers);
app.route("/createUser").post(user.createUser);
app.route("/user/:username/update/:upateemail").get(user.updateUserEmail);
app.route("/userLocation").get(user.getUserLocation);
app.route("/deleteUser ").get(user.deleteUser);

app.listen(port,function(err){
    if(err) throw err;
    console.log(`Server is listening to port ${port}`);
})

module.exports=app;