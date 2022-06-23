const mongoose = require("mongoose");

let config = require("config");

var mongoDB;

if(process.env.NODE_ENV =='test'){
    console.log('Setting DB environment to test');
    mongoDB ="mongodb://127.0.0.1/testing-express-app-test";
}
else if(process.env.NODE_ENV =='dev')
{
    console.log('Setting DB environment to dev');
    mongoDB ="mongodb://127.0.0.1/testing-express-app-dev";
}
else{
    console.log('Setting DB environment to prod');
    mongoDB ="mongodb://127.0.0.1/testing-express-app";
}



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