const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
const cors = require("cors");

const URL = "mongodb://localhost:27017/MH";
const frontend = "http://localhost:3000";

// app.use(cors({
//     origin: frontend,
//     credentials: true
//   }));

app.use((req, res, next) => {
    const corsWhitelist = ["https://for-shops.vercel.app", "http://localhost:3000"]
    if(corsWhitelist.indexOf(req.headers.origin)!==-1){
      res.header("Access-Control-Allow-Origin", req.headers.origin);
      res.header('Access-Control-Allow-Credentials', true);
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
      res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    }
    next();
  });

const port =process.env.PORT|| 9000;
mongoose.connect(URL,{ useNewUrlParser: true,  useUnifiedTopology: true }, ()=>{
    console.log('Schema Started');
});

app.get("/pp",(req,res)=>{
    res.send("Hello World")
    console.log(req);
});

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.listen(port, ()=>{
    console.log(`BE started at port ${port}`);
});