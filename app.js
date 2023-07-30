const express = require("express");
const app = express();
const path = require("path");
const { title } = require("process");
const port = 80;

app.use('/static', express.static('static'))

// Set the template engine as pug
app.set('view engine', 'pug')

// Set the views directory
app.set('views', path.join(__dirname, 'views'))

app.get("/" , (req , res)=>{
    res.end("this is home page");
})

app.get("/port" , (req , res)=>{
    res.status(200).render('portfolio.pug' ,{ title :'udit portfolio'}  );
})

app.get("/projects" , (req , res)=>{
    res.status(200).render('projects.pug' , {title : "my projects"})
})

app.get("/qual",  (req, res)=>{
    res.render("qualification.pug" , {title:"my qualifications"})
})
app.get("/about",  (req, res)=>{
    res.render("about.pug" , {title:"About me"})
})
app.get('/contact' , (req, res)=>{
    res.render('contact.pug' ,{title : 'contact me'})
})
app.post('/contact' , (req, res)=>{
    res.send(alert("SUBMITTED SUCCESSFULLY"))
})


app.listen(port , ()=>{
    console.log(`the application started at localhost/${port}`);
})