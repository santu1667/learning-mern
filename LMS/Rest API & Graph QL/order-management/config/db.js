const mongoose = require("mongoose");

const mongoDB = "mongodb://127.0.0.1/order-management";

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