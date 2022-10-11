const express=require('express');
const route=express.Router();
const Pool=require('pg').Pool;
const creds=require('../db');

const credentials= new Pool(creds);

route.get("/",(req,res)=>{
    var e_mail=req.query.email;
    var pass=req.query.pass;
    console.log(req.query.email);
    var name="saikumar"
    var userJson=`{"user_id":1,"email":${e_mail.toString()},"name":${name.toString()}}`;
    if(e_mail=="22m0745@iitb.ac.in"&&pass=="audibenz"){
        res.statusCode=200;
        res.send(userJson);
    }else{
    res.status(200).send("u have invoked entered wrong credentials");
}
});


module.exports=route;