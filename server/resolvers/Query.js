const Query = {
  users: (parent,args,context) => context.prisma.users()
}

module.exports = Query