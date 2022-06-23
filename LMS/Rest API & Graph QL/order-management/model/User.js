const mongoose = require('mongoose');  
const ShoppingItem = require("./ShoppingItem");

const UserSchema = mongoose.Schema({  
  name: {type:String, require:true},
  email:  {type:String, require:true},
  address:  {
    streetAdress:{type:String, require:true},
    zip:{type:String, require:true},
    country:{type:String, require:true}
  },
  shoppingItems:[{
    type:String,
    enum:["groceries","electronis","entertainment"]
  }],
  shoppingDate:{
    type:Date,
    default:Date.now()
  }
});

module.exports = mongoose.model('User',UserSchema);