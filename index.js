const express=require('express');
const app=express();

require('dotenv').config();
const port=process.env.PORT;

app.get('/',(req,res)=>{
  res.send("Hello!!")
})

app.get('/login',(req,res)=>{
  res.send("Login Page!!")
})

app.get('/about',(req,res)=>{
  res.send("About page!!")
})

app.get('/contact',(req,res)=>{
  res.send('<h1>This is contact page</h1>');
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})