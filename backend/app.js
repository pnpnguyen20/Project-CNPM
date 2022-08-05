const express = require('express');
const createError = require('http-errors');
const UserService=require('./User')
const morgan = require('morgan');
const {PrismaClient} =require('@prisma/client');
const { json } = require('express');
const { Message } = require('./DataChecker');
require('dotenv').config();
const prisma= new PrismaClient();

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
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  const us_service=new UserService.UserManager(req.body["US_ACCOUNT"],req.body["US_PASSWORD"])
  const US_NEWPASS=""
  
  res.json( {acce:await us_service.acc.signUp(),US_NEWPASS})
});
app.patch('/login', async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  const us_service=new UserService.UserManager(req.body["ACCESS"]["US_ACCOUNT"],req.body["ACCESS"]["US_PASSWORD"])
  us_service.acc.user_id=req.body["ACCESS"]["US_ID"]
  us_service.acc.token=req.body["ACCESS"]["US_TOKEN"]
  res.json(await us_service.acc.changePass(req.body["ACCESS"]["US_PASSWORD"],req.body["US_NEWPASS"]))
});
app.get('/login', async (req, res, next) => {
  
  
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
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
