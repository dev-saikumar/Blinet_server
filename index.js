const express=require('express');
const app=express();
const bodyparser=require('body-parser');
const loginpage=require('./routes/login');
 



app.use(bodyparser.json());
app.get("/",(rq,res)=>{
res.status(200).sendFile(__dirname+"/html_files/login.html");
});

app.get("/register",(rq,res)=>{
    res.status(200).sendFile(__dirname+"/html_files/register.html");
    });

app.get("/homepage",(rq,res)=>{
    res.status(200).sendFile(__dirname+"/html_files/home.html");
    });

app.use("/login",loginpage);

app.listen("3000",()=>{
console.log("connected successfully");
});