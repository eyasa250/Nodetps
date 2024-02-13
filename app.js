const express = require('express')
//create  instance of express server 
const app =express();

const category =require('./routes/category')
const auth =require('./routes/auth')
const post =require('./routes/post')


app.listen(5000,()=>{console.log("first server is running on port 5000")})

app.use('/category', category)

//first route with get method and send response to the client
app.get('/',(req,res)=>{
   // res.send("<h1>hello world</h1>")
   //send accepte html , string , json
res.sendFile(__dirname+'/index.html')})

app.get('/products',(req,res)=>{
    res.send([{id:1,name:"sachin"},{id:2,name:"ee"} ])})

app.get('/template',(req,res)=>{
    res.redirect("products")})

    app.use('/auth', auth)
    app.use('/post', post)

