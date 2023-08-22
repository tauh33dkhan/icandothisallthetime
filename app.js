var express = require('express');
var app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser())

app.get('/userdata', (req, res)=>{
  res.header("Access-Control-Allow-Origin", '*');
  if(req.cookies.auth !='true'){  // demo auth check no bug here
   return res.redirect('/')
  }
  res.json({"data":"Sentivie user Data"})
})

app.get('/', (req, res)=>{
  res.send("<form method='POST'><input type='text' placeholder='username'><input type='password' placeholder='password'><input type='submit' vaue='login'>")
})

app.post('/', (req,res)=>{
  res.cookie("auth", "true", {httpOnly: true, sameSite: 'None'})  //demo login session no bug here
  res.redirect('/userdata')
})

app.listen(80, ()=>{console.log("listening on port 80")})
