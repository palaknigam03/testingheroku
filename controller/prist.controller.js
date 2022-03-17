const { response } = require('express');
const { request } = require('express');
const Prist = require('../model/prist.model');
const {validationResult} =require('express-validator');
exports.signup =(request,response)=>{
    const errors = validationResult(request);
    if(!errors.isEmpty()){
        return response.status(403).json({errors : errors.array()})
    }
    //console.log(request.body);
  let userEmail = request.body.email;
  let userPassword = request.body.password;
  let pristName = request.body.pristName;
  let Mob_no = request.body.Mob_no;
   
  Prist.create({email: userEmail,password: userPassword,pristName: pristName, Mob_no: Mob_no})
  .then(result=>{
     // console.log(result);
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

    Prist.findOne({email:userEmail,password:userPasword})
    .then(result=>{
        console.log(result);
        return response.status(201).json(result);
     }).catch(err=>{
        console.log(err);
  });
}
