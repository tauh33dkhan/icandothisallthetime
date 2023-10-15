var express = require('express');
var app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser())

app.get('/userdata', (req, res)=>{
  res.header("Access-Control-Allow-Origin", '*');
  if(req.cookies.auth !='true'){  // demo auth check no bug here just to implement auth
   return res.redirect('/')
  }
  res.json({"data":"Sentivie user Data"})  // sensitive data of user that you have to steal
})

app.get('/', (req, res)=>{
  res.send("<form method='POST'><input type='password' placeholder='password'><input type='submit' vaue='login'>") // demo login no bug here
})

app.post('/', (req,res)=>{
  res.cookie("auth", "true")  //demo login session no bug here
  res.redirect('/userdata')
})

app.listen(80, ()=>{console.log("listening on port 80")})
