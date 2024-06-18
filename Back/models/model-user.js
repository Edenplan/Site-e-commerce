const mongoose = require('mongoose');


const muv = require('mongoose-unique-validator');


const userSchema = mongoose.Schema({
    firstName :{type:String,required:true},
    lastName :{type:String,required:true},
    email :{type:String,required:true,unique:true},
    password :{type:String,required:true},
    
  })



  mongoose.plugin(muv)



  let Users = mongoose.model('users', userSchema)
  module.exports=Users