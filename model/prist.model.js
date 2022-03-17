const express=require('express');
const mongoose = require('mongoose');

const pristSchema = new mongoose.Schema({
    email:{
        type :String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },

    pristName:{
        type:String,
        required:true
    },

    Mob_no:{
        type:String,
        required:true
    }

    
});

module.exports = mongoose.model("prist",pristSchema);