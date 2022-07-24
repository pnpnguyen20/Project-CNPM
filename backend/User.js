
const {PrismaClient} =require('@prisma/client');
const prisma= new PrismaClient();
const {DataChecker, Message}= require('./DataChecker')
const checker=new DataChecker()
class User {
    constructor(user_id, user_info, user_authen) {
        this.user_id = user_id
        this.user_info = user_info
        this.user_authen = user_authen
    }
}
class User_info {
    constructor() {
        this.id = 0
        this.name = ""
        this.mail = ""
        this.phone = ""
        this.birth = ""
        this.gender = ""
        this.address = "" 
    }

    async setID(id){
        
        
        const find= await (async function (id){
            const data= await prisma.uSER_INFO.findUnique({
                where:{
                    US_ID:id,
                },
            })
            return data
        })(id)

        return await(function (find,ob){
        if (!find)
            return new Message(false,"User is not exist")

        ob.id=find.US_ID
        ob.birth=find.US_BIRTH
        ob.gender=find.US_GENDER
        ob.mail=find.US_MAIL
        ob.name=find.US_NAME
        ob.phone=find.US_PHONE
        ob.address=find.US_ADDRESS
            return new Message(true,"Success")
        }(find,this))

    }
    setName(name){
        if(checker.name(name))
        {
           this.name=name
           return new Message(true,"Success")      
        }
        else
        return new Message(false,name+" Is not valid")
    }
    setMail(mail){
        if(checker.email(mail))
        {
           this.mail=mail
           return new Message(true,"Success")     
        }
        else
        return new Message(false,mail+" Is not valid")
    }
    setPhone(phone){
        if(checker.phone(phone))
        {
           this.phone=phone
           return new Message(true,"Success")     
        }
        else
        return new Message(false,phone+" Is not valid")
    }
    setBirth(birth){
        if(checker.day(birth))
        {
           this.birth=birth
           return new Message(true,"Success")     
        }
        else
        return new Message(false,birth+" Is not valid")
    }
    setGender(gender){
        if(gender=="1" || gender=="0")
        {
            this.gender=gender
            return new Message(true,"Success")     
        }
        else
        return new Message(false,gender+" Is not valid")
    }
    setAddress(address){
        if(checker.address(address)){
            this.address=address
            return new Message(true,"Success")  
        }
        else
        return new Message(false,address +" Is not valid")
    }
    async updateDatabase(){
        const data=await prisma.uSER_INFO.update({
            where:{
                US_ID: this.id
            },
            data:{
                US_BIRTH: new Date(this.birth),
                US_GENDER: this.gender,
                US_MAIL: this.mail,
                US_NAME: this.name,
                US_PHONE: this.phone,
                US_ADDRESS: this.address,
            
            }
        })

    }
}

class User_authenticator {
    constructor(account, password, user_id, token) {
        this.account = account
        this.password = password
        this.user_id = user_id
        this.token = token
    }
}

function load_UserList(params) {

}
const temp=new User_info()

//console.log(temp.setName("Pham Minh Tai",true))
async function test(){
    
    const a=await temp.setID(1)
    temp.setGender("0")
    temp.setBirth("11/26/2001")
    temp.setMail("pmtai20@clc.fitus.edu.vn")
    temp.setName("Pham Minh Tai")
    temp.setPhone("0938394323")
    temp.setAddress(" duong abc pho xyz  tinh binh duong")

    console.log(temp)
    const test= await temp.updateDatabase()
    const a1=new User_info()
    const data= await a1.setID(1)
    console.log(a1)
    //console.log(data)
    //console.log(temp.setName("hello"))
    
        
}


    
//const a=temp.setID(2)

//test()
test()