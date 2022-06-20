const mongoose = require("mongoose");

var mongoDB = "mongodb://127.0.0.1/node-express-auth";

const initiateMongoServer = async () =>{
    try{
        await mongoose.connect(mongoDB,{useNewUrlParser: true, useUnifiedTopology:true});
        console.log("Connected to DB");
    }
    catch(e){
        console.log("**Mongo DB Connection Error**");
        throw e;
    }
    
};

module.exports = initiateMongoServer;

