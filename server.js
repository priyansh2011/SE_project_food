//Chunk-1
require('dotenv').config();
const express =require("express");
const path=require("path");
const bodyParser=require("body-parser");
const sendMail1=require("./mail1")
const sendMail2=require("./mail2")
const sendMail3=require("./mail3")
const request=require("request");
const log=console.log;
const app =express();
app.use(express.static("public"));

const PORT=process.env.PORT || '3000';
app.get("/",(req, res)=>{
  res.sendFile(__dirname+"/index.html");
})


app.use(bodyParser.urlencoded({extend:true}));
app.use(express.json())

// name, email, phone, date, time, people, cb
app.post("/email1", (req,res)=>{
  //send Email
  const {name, email, phone, date, time, people, message}=req.body;
  console.log("Data: ",req.body);
  sendMail1(name, email, phone, date, time, people, message, function(err, data){
    if(err){
      res.status(500).json({message: "Internal Error"});

    }
    else{
      res.json({message: "Email sent!!"});
            // res.sendFile(__dirname+"/sent.html");
    }
  });
});

app.post("/email2", (req,res)=>{
  //send Email
  const {name, email, subject, message}=req.body;
  console.log("Data: ",req.body);
  sendMail2(name, email, subject, message, function(err, data){
    if(err){
      res.status(500).json({message: "Internal Error"});
    }
    else{
      res.json({message: "Email sent!!"});
    }
  });
});

app.post("/email3", (req,res)=>{
  //send Email
  const {fname, lname, email, address, phone, country, state, zip, payment, items, totalPrice}=req.body;
  console.log("Data: ",req.body);
  sendMail3(fname, lname, email, address, phone, country, state, zip, payment, items, totalPrice, function(err, data){
    if(err){
      res.status(500).json({message: "Internal Error"});
    }
    else{
      res.json({message: "Email sent!!"});
    }
  });
});

app.listen(PORT,()=>{
  log("Server is starting on port, ",3000);
})
