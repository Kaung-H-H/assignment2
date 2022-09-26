const express = require('express'); 

const app = express()

app.get("",(req,res)=>{

    res.send("<h1>Assignment2 Main Page</h1>");
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html')
     
})

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html')
     
})

app.get('/menu', (req, res) => {
    res.sendFile(__dirname + '/menu.html')
     
})

app.get('/home', (req, res) => {
   res.sendFile(__dirname + '/home.html')
    
})

app.listen(8080,()=>{

    console.log('Server starting up at: port:8080:');
})
