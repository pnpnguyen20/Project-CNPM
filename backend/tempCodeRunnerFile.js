
const data=prisma.uSER_ACCOUNT.findMany({
    where:{
        US_ID:1,
    },
})
console.log(data)