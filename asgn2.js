const express = require('express'); 

const app = express()

app.get("",(req,res)=>{

    res.send("<h1>Assignment2</h1>");
})

app.get("/about",(req,res)=>{

    res.send("<h1>Kaung Htet Hein</h1>");
})

app.get("/contact",(req,res)=>{

    res.send("<h1>htetk8551@gmail.com</h1>");
})

app.get("/home",(req,res)=>{


    res.send("<h1>This is home page.</h1>");
})

app.get("/address",(req,res)=>{


    res.send("<h1>This is address page.</h1>");
})

app.listen(8080,()=>{

    console.log('Server starting up at: port:8080:');
})