const express = require('express')
const Users = require ("../models/model-user")


exports.inscription = async (req,res) => {
    const user= {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        password : req.body.password
    };

   const newUser  = await new Users(user)
   newUser.save() 
   console.log(newUser);
   



    
    
    res.send(req.body.firstName);
    
}
exports.connexion = (req,res) => {
    res.send("connexion")
}