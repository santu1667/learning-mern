const mongoose = require("mongoose");

var mongoDB = "mongodb://127.0.0.1/test-image";

const initiateMongoServer = async () =>{
    try{
        await mongoose.connect(mongoDB,{useNewUrlParser: true, useUnifiedTopology:true});
        console.log("Connected to DB test-image");
    }
    catch(e){
        console.log("**Mongo DB Connection Error**");
        throw e;
    }
    
};

module.exports = initiateMongoServer;

