if ( await prisma.lABEL.findFirst({
    where:{
     
      PJ_ID:req.body["access"]["PJ_ID"],
      LB_ID:req.body["data"]["LB_ID"]}
    
  }))
  await prisma.lABEL.delete({
    where:{
      PJ_ID_LB_ID:{
      PJ_ID:req.body["access"]["PJ_ID"],
      LB_ID:req.body["data"]["LB_ID"]}
    }
  })