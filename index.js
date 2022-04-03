const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
const UserModel = require("./models/user");
const URL = "mongodb://localhost:27017/MH";
const frontend = "http://localhost:3000";

const port =process.env.PORT|| 9000;
mongoose.connect(URL,{ useNewUrlParser: true,  useUnifiedTopology: true });

app.get("*",(req,res)=>{
    res.send("Hello World")
});

app.listen(port, ()=>{
    console.log(`BE started at port ${port}`);
});