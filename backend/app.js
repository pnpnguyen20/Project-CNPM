const express = require('express');
const createError = require('http-errors');
const UserService=require('./User')
const morgan = require('morgan');
const {PrismaClient} =require('@prisma/client');
const { json } = require('express');
const {DataChecker, Message}= require('./DataChecker')
require('dotenv').config();
const prisma= new PrismaClient();
const checker=require('./DataChecker');
const { use } = require('./routes/api.route');
const app = express();
const app2= express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
function toJson(data) {
  return JSON.stringify(data, (_, v) => typeof v === 'bigint' ? v.toString() : v);
}
app.post('/login', async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  
  const us_service=new UserService.UserManager(req.body["US_ACCOUNT"],req.body["US_PASSWORD"])
  const US_NEWPASS=""
  
  res.json( {acce:await us_service.acc.signUp(),US_NEWPASS})
});
app.patch('/login', async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
 
  const us_service=new UserService.UserManager(req.body["access"]["US_ACCOUNT"],req.body["access"]["US_PASSWORD"])
  us_service.acc.user_id=req.body["access"]["US_ID"]
  us_service.acc.token=req.body["access"]["US_TOKEN"]
  res.json(await us_service.acc.changePass(req.body["access"]["US_PASSWORD"],req.body["US_NEWPASS"]))
});
app.get('/login', async (req, res, next) => {
  
  
  res.header("Access-Control-Allow-Origin", "*");
 
  //console.log(req.body)
  //console.log(req.body["US_ACCOUNT"])
  const us_service=new UserService.UserManager(req.body["US_ACCOUNT"],req.body["US_PASSWORD"])
  const message=await us_service.acc.logIn()
  if(message.success)
  {
        const data =(await prisma.uSER_ACCOUNT.findFirst({
          where:{
            US_ACCOUNT:req.body["US_ACCOUNT"],
            US_PASSWORD:req.body["US_PASSWORD"]
        },
          include:{
              USER_INFO:{
                include:{
                  PROJECT_MEMBER:{
                    include:{
                      PROJECT_INFO:true
                    }
                  }
                }
              }
              
          }
      }))
 

  
      res.json({data,message})
  }
  else
    res.json({data:{},message})
});

app.get('/info', async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  const us_service=new UserService.UserManager(req.body["US_ACCOUNT"],req.body["US_PASSWORD"])
  //us_service.acc.user_id=req.body["US_ID"]
  us_service.acc.token=req.body["US_TOKEN"]
  const message=await us_service.acc.logIn()
  if(req.body["US_ID"]==us_service.acc.user_id)
  {
  
  
 
  const data=await prisma.uSER_INFO.findFirst({
    where:{
      US_ID:req.body["US_ID"],
    },
  })
  if(!data)
    message= new Message(false,"User not exist")
    res.json({data,message})
  }

  
  else
  res.json({data:{},message:new Message(false,"User is not log in")})
});
app.post('/info', async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  const us_service=new UserService.UserManager(req.body["access"]["US_ACCOUNT"],req.body["access"]["US_PASSWORD"])
  //us_service.acc.user_id=req.body["US_ID"]
  us_service.acc.token=req.body["access"]["US_TOKEN"]
  const message=await us_service.acc.logIn()
  if(req.body["data"]["US_ID"]==us_service.acc.user_id)
  {
  await us_service.info.setID(req.body["data"]["US_ID"])
  message.message="Information Update success"
  if(us_service.info.name!=req.body["data"]["US_NAME"])
  {
      var temp=us_service.info.setName(req.body["data"]["US_NAME"])
      if(temp.success==false){
        message.success=false
        if(message.success==true)
          message.message=temp.message
        else
          message.message+=temp.message
      }
  }
  if(us_service.info.mail!=req.body["data"]["US_MAIL"])
  {
      var temp=us_service.info.setMail(req.body["data"]["US_MAIL"])
      if(temp.success==false){
        message.success=false
        if(message.success==true)
          message.message=temp.message
        else
          message.message+=temp.message
      }
  }
  if(us_service.info.phone!=req.body["data"]["US_PHONE"])
  {
      var temp=us_service.info.setPhone(req.body["data"]["US_PHONE"])
      if(temp.success==false){
        message.success=false
        if(message.success==true)
          message.message=temp.message
        else
          message.message+=temp.message
      }
  }
  if(us_service.info.birth!=req.body["data"]["US_BIRTH"])
  {
      var temp=us_service.info.setBirth((req.body["data"]["US_BIRTH"]))
      if(temp.success==false){
        message.success=false
        if(message.success==true)
          message.message=temp.message
        else
          message.message+=temp.message
      }
  }
  if(us_service.info.gender!=(req.body["data"]["US_GENDER"]))
  {
      var temp=us_service.info.setGender(req.body["data"]["US_GENDER"])
      if(temp.success==false){
        message.success=false
        if(message.success==true)
          message.message=temp.message
        else
          message.message+=temp.message
      }
  }
  if(us_service.info.address!=(req.body["data"]["US_ADDRESS"]))
  {
      var temp=us_service.info.setAddress(req.body["data"]["US_ADDRESS"])
      if(temp.success==false){
        message.success=false
        if(message.success==true)
          message.message=temp.message
        else
          message.message+=temp.message
      }
  }  
  await us_service.info.updateDatabase()
  res.json({data:{},message})
  }
  else
  res.json({data:{},message:new Message(false,"User is not log in")})
});
app.use('/api', require('./routes/api.route'));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
