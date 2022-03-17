const { response } = require('express');
const { request } = require('express');
const user = require('../model/user.model');
const {validationResult} =require('express-validator');


exports.signup =(request,response)=>{
    const errors = validationResult(request);
    if(!errors.isEmpty()){
        return response.status(403).json({errors : errors.array()})
    }
  let userEmail = request.body.email;
  let userName = request.body.username;
  let userPasword = request.body.password;
   
  user.create({email: userEmail, username: userName,password: userPasword})
  .then(result=>{
      console.log(result);
      return response.status(201).json(result);
  })
  .catch(err=>{
      console.log(err);
  });
}

exports.signin =(request,response)=>{
    const errors =validationResult(request);
    if(!errors.isEmpty()){
        return response.status(403).json({errors:errors.array()})
    }
    let userEmail = request.body.email;
    let userPasword = request.body.password;

    user.findOne({email:userEmail,password:userPasword})
    .then(result=>{
        console.log(result);
        return response.status(201).json(result);
     }).catch(err=>{
        console.log(err);
  });
}
