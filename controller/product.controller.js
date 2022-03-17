
const express = require('express');
const Product = require('../model/product.model');
const {validationResult} = require('express-validator');

exports.deleteProduct = (request,response)=>{
    Product.deleteOne({_id: request.params.id})
    .then(result=>{
      if(result.deletedCount)
        return response.status(202).json({message: 'success'});
      else
        return response.status(204).json({message: 'not deleted'});  
    })
    .catch(err=>{
      return response.status(500).json({message: 'Something went wrong'});
    });
}
exports.getProduct = (request,response)=>{
    Product.find().
    then(results=>{
        return response.status(200).json(results);
    })
    .catch(err=>{
        return response.status(500).json({message: 'Sever Error'});
    });
}
exports.update = (request,response,next)=>{
    const errors = validationResult(request);
    if(!errors.isEmpty())
      return response.status(400).json({errors: errors.array()});
    Product.updateOne({_id: request.body.productId},
        {
            $set:{
                productName: request.body.categoryName,
                productImageUrl: "http://localhost:3000/images/"+request.file.filename,
                productQty: request.body.productQty,
                productDescription: request.body.productDescription,
                productDiscount:request.body.productDiscount,
                productPrice:request.body.productPrice,
            }
        }).then(result=>{
             if(result.modifiedCount)
              return response.status(204).json({message: 'success'});
             else
              return response.status(404).json({message: 'record not found'})
        }).catch(err=>{
          return response.status(500).json({message: 'Something went wrong..'});
        });
}
exports.add = (request,response,next)=>{
  //console.log(request.body);
  //console.log(request.file);  
  let errors = validationResult(request);
  if(!errors.isEmpty()){
    return response.status(400).json({errors: errors.array()});
}
    
   let productImageUrl = "";
    
    if(request.files.length>0){
       productImageUrl = 'http://localhost:3000/images/product'+request.files[0].filename;
    }

  Product.create({
    productName: request.body.productName,
    productImageUrl: productImageUrl,
    productQty: request.body.productQty,
    productDescription: request.body.productDescription,
    productDiscount:request.body.productDiscount,
    productPrice:request.body.productPrice,
    categoryId:request.body.id
  })
  .then(result=>{
      return response.status(202).json(result);
  })
  .catch(err=>{
    console.log(err);
      return response.status(403).json({message: "Oops! Something went wrong.."});
  });  
} 