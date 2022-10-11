const express=require('express');

const route=express.Router();

route.get("/",(req,res)=>{
    var e_mail=req.query.email;
    var pass=req.query.password;
    var userJson=`{"user_id":1,"email":${e_mail},"name":saikumar}`;
    if(email=="22m0745@iitb.ac.in"&&password=="audibenz"){
        res.statusCode=200;
        res.send(userJson);
    }else{
        res.statusCode=404;
        res.send("wrong credentials");
    }
});


module.exports==route;