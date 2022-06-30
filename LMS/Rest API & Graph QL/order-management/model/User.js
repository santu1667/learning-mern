const mongoose = require('mongoose');  

const UserSchema = mongoose.Schema({  
  name: {type:String, require:true},
  email:  {type:String, require:true},
  userType:{type:String,require:true},
  address:  {
    streetAdress1:{
      type:String, 
      require:true},
    streetAdress2:{
      type:String},
    zip:{
      type:String, 
      require:true},
    country:{
      type:String, 
      require:true
    }
  },
  shoppingItems:{
    type : Array , 
    require:true
  },
  shoppingDate:{
    type:Date,
    default:Date.now()
  }
});

module.exports = mongoose.model('User',UserSchema);