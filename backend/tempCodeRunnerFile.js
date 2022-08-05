await prisma.pROJECT_MEMBER.create({
    data: {
        PJ_ID: this.PJ_ID,
        MEM_ID: user.US_ID,
        MEM_POS: 0,
    }
})
await prisma.pROJECT_INFO.update({
    where: {
        PJ_ID: this.PJ_ID,
    },
    data: {
        PJ_ADMIN: user.US_ID,
    }
})