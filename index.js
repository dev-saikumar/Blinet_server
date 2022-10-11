const express=require('express');
const app=express();
const bodyparser=require('bodyparser');
const loginpage=require('./routes/login');
 



app.use(bodyparser.json());

app.use("/login",loginpage);

app.listen("3000",()=>{
console.log("connected successfully");
});