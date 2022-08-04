const express = require('express');
const createError = require('http-errors');
const UserService=require('./User')
const morgan = require('morgan');
const {PrismaClient} =require('@prisma/client');
const { json } = require('express');
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
  
  const us_service=new UserService.UserManager(req.body["US_ACCOUNT"],req.body["US_PASSWORD"])
  res.json(await us_service.acc.signUp())
});
app.get('/login', async (req, res, next) => {
  
  

  //console.log(req.body)
  //console.log(req.body["US_ACCOUNT"])
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
 

  
  res.json(data)
});

app.use('/api', require('./routes/api.route'));

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
