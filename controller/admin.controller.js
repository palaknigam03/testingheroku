const { response } = require('express');
const { request } = require('express');
const Admin = require('../model/admin.model');
const {validationResult} =require('express-validator');
exports.signup =(request,response)=>{
    const errors = validationResult(request);
    if(!errors.isEmpty()){
        return response.status(403).json({errors : errors.array()})
    }
  let userEmail = request.body.email;
  let userPasword = request.body.password;
   
  Admin.create({email: userEmail,password: userPasword})
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

    Admin.findOne({email:userEmail,password:userPasword})
    .then(result=>{
        console.log(result);
        return response.status(201).json(result);
     }).catch(err=>{
        console.log(err);
  });
}
