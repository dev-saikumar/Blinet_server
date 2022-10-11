const express=require('express');
const app=express();
const bodyparser=require('body-parser');
const loginpage=require('./routes/login');
 



app.use(bodyparser.json());
app.get("/",(rq,res)=>{
res.status(200).send("u have invoked me");
});
app.use("/login",loginpage);

app.listen("3000",()=>{
console.log("connected successfully");
});