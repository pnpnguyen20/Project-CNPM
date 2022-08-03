// Project ko có Description
// cần 1 function ở Project Manager để updata projectInfo
const {PrismaClient} =require('@prisma/client');
const { json } = require('express');
const prisma= new PrismaClient();
const {DataChecker, Message}= require('./DataChecker')
const checker=new DataChecker()
class Project_info {

    constructor() {
        this.PJ_ID = 0
        this.PJ_NAME = ""
        this.PJ_DESCRIPTION = ""
        this.PJ_CREATEDAY = new Date()
        this.PJ_DEADLINE = new Date()
        this.PJ_ADMIN=0
        this.PJ_STATUS = ""
        this.PJ_OWNER = ""
        
    }
    async findNewID(){
        const oldProject=await prisma.pROJECT_INFO.aggregate({
            _min:{
                PJ_ID: true,
            },
            where:{
                 PJ_NAME: "",
                },
            })    
        if(oldProject._min&&oldProject._min.PJ_ID>0){
                this.PJ_ID=oldProject._min.PJ_ID
                await prisma.pROJECT_INFO.delete({
                    where:{
                        PJ_ID: this.PJ_ID,
                    },
                })
        }
        else{
            const newID= await prisma.pROJECT_INFO.aggregate({
                _max:{
                    PJ_ID: true
                }
            })
            
            this.PJ_ID=newID._max.PJ_ID+1
           
        }
    }
    async delete(user){
        if(this.PJ_ID!=0 && this.PJ_ADMIN==user.MEM_ID){
            // wait for continue
        }
        else
        {
            if(this.PJ_ID==0)
            return new Message(false,"Unknown Project be called")
            else
            return new Message(true,"Not permitted to delete Project")
        }   
    }
    async create(user){
        if(this.PJ_ID==0){
        await this.findNewID()
        await prisma.pROJECT_INFO.create({
            data:{
                PJ_ID: this.PJ_ID,
                PJ_NAME: this.PJ_NAME,
                PJ_CREATEDAY:this.PJ_CREATEDAY,
            
                PJ_STATUS: "0",
                //PJ_ADMIN:user.US_ID,
                PJ_OWNER:this.PJ_OWNER,
            }        

        })
        await prisma.pROJECT_MEMBER.create({
            data:{
                PJ_ID:this.PJ_ID,
                MEM_ID:user.US_ID,
                MEM_POS:0,
            }
        })
        await prisma.pROJECT_INFO.update( {
            where:{
                PJ_ID:this.PJ_ID,
            },
            data:{
                PJ_ADMIN:user.US_ID,
            }
        }   )
        }
    }
    async loadInfo(user){
        var project=await prisma.pROJECT_INFO.findFirst({
            where:{
                PJ_ID:user.PJ_ID
            }
 
        })
        if (project){
            this.PJ_ID=project.PJ_ID
            this.PJ_NAME=project.PJ_NAME
            this.PJ_CREATEDAY=project.PJ_CREATEDAY
            this.PJ_DEADLINE=project.PJ_DEADLINE
            this.PJ_ADMIN=project.PJ_ADMIN
            this.PJ_OWNER=project.PJ_OWNER
            this.PJ_STATUS=project.PJ_STATUS
            return new Message(true,"Success")
        }
        else
            return new Message(false,"Project Haven't Exist")
    }
    setName(name){
        if(checker.name(name))
        {
            this.PJ_NAME=name
            return new Message(true,"Success")
        }
        else    
            return new Message(false,"Project Name is invalid")
    }
    setDeadline(day){
        if(!checker.day(day))
            return new Message(false,"Day is invalid")
        var deadline= new Date(day)
        if(deadline<this.PJ_CREATEDAY)
            return new Message(false,"Deadline can be before the CreateDay")
        this.PJ_DEADLINE=deadline   
        return new Message(true,"Success")
    }
    setOwner(owner){
        if(!checker.name(owner))
            return new Message(false,"Owner include invalid character")
        this.PJ_OWNER=owner
        return new Message(true,"Success")
    }
    setStatus(stt){
        if((stt!="0")||(stt!="1"))
            return new Message(false,"Unknown status")
        this.PJ_STATUS=stt
        return new Message(true,"Success")
    }
}
class Access{
    constructor(US_ID){
        this.US_ID=US_ID
        this.PJ_ID=0
        this.US_POS=0
    }
    async connect(projectID){
        var data= await prisma.pROJECT_MEMBER.findFirst({
            where:{
                PJ_ID: projectID,
                MEM_ID:this.US_ID,
            }
        })
        if(data){
            this.US_POS=data.MEM_POS
            return new Message(true,"Connect Success")
        }
        else
            return new Message(false,"Can't connect to this project")
                
    }
    async getProjectAccessibility(){
        return await prisma.pROJECT_ACCESSIBILITY.findFirst({
            where:{
                MEM_POS:this.US_POS
            }
        })
    }
    async getTaskAccessibility(){
        return await prisma.tASK_ACCESSIBILITY.findFirst({
            where:{
                MEM_POS:this.US_POS,
            }
        })
    }
}
class Project_Member{
    constructor(user){
        this.member=user
    }
    async addMember(memID){
        var exist= await prisma.uSER_INFO.findFirst({
            where:{
                US_ID:memID
            }
        })
        if( exist)
        {
        var accessibility=await this.member.getProjectAccessibility()
        if(accessibility.EDIT_MEM=="1")
        {
            var exist= await prisma.pROJECT_MEMBER.findFirst({
                where:{
                    PJ_ID:this.member.PJ_ID,
                    MEM_ID:memID
                }
            })
            if(!exist){
                await prisma.pROJECT_MEMBER.create({
                    data:{
                        PJ_ID:this.member.PJ_ID,
                        MEM_ID:memID,
                        MEM_POS:0
                    }
                })
                return new Message(true,"Success")
            }
            else    
                return new Message(false,"Member has already been Project")
        }
        else
            return new Message(false,"Member are not allow to add member")
    }
    else
        return new Message(false,"User is not exist")
    }
}
async function test(){
    //var pj=new Project_info()
    //console.log(pj.setName("Software Engineer 3"))
    //pj.setOwner("Khoa CNTT")
    var user= new Access(1)
    await user.connect(5)
    var pj_mem=new Project_Member(user)
    await pj_mem.addMember(2)
    //console.log(await user.getProjectAccessibility())
    //console.log(await user.getTaskAccessibility())
    //await pj.create(user)
    //var data= await prisma.pROJECT_INFO.findMany({
        
    //    }
    //)
    //console.log(data)

}
 test()
 //   async mem_exist(PJ_ID){
 //       var data= await prisma.pROJECT_MEMBER.findFirst({
 //           where:{
 //               US_ID: this.US_ID,
 //               PJ_ID: PJ_ID,
 //           }
 //       })
 //       if (data){

 //       }
 //   }

//}
